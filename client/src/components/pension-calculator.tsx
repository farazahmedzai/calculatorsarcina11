import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle, Calculator, Users, TrendingUp, BarChart3, Award } from "lucide-react";
import { calculatePension, validatePensionInput, type PensionCalculationInput, type PensionCalculationResult } from "@/lib/pension-calculator";
import { apiRequest } from "@/lib/queryClient";

const pensionCalculationSchema = z.object({
  currentAge: z.number().min(18, "Vârsta minimă este 18 ani").max(80, "Vârsta maximă este 80 ani"),
  monthlySalary: z.number().min(1000, "Salariul minim este 1.000 RON").max(50000, "Salariul maxim este 50.000 RON"),
  contributionYears: z.number().min(0, "Stagiul minim este 0 ani").max(50, "Stagiul maxim este 50 ani"),
  pensionType: z.string().min(1, "Selectează tipul pensiei"),
});

type PensionCalculationForm = z.infer<typeof pensionCalculationSchema>;

export function PensionCalculator() {
  const [result, setResult] = useState<PensionCalculationResult | null>(null);
  
  const form = useForm<PensionCalculationForm>({
    resolver: zodResolver(pensionCalculationSchema),
    defaultValues: {
      currentAge: 35,
      monthlySalary: 5000,
      contributionYears: 10,
      pensionType: "",
    },
  });

  const calculateMutation = useMutation({
    mutationFn: async (data: PensionCalculationForm) => {
      // Calculate pension locally
      const calculationResult = calculatePension(data);
      
      // Save calculation to backend
      const response = await apiRequest("POST", "/api/calculate-pension", {
        ...data,
        calculatedAmount: calculationResult.amount.toString(),
      });
      
      return calculationResult;
    },
    onSuccess: (data) => {
      setResult(data);
    },
    onError: (error) => {
      console.error("Calculation error:", error);
    },
  });

  const onSubmit = (data: PensionCalculationForm) => {
    calculateMutation.mutate(data);
  };

  return (
    <Card className="w-full mx-auto border border-purple-200 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-6">
        <CardTitle className="text-xl font-semibold flex items-center justify-center gap-2">
          <Calculator className="w-5 h-5" />
          Calculator Pensie
        </CardTitle>
        <p className="text-purple-100 text-sm">
          Calculează pensia rapidă și precisă
        </p>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="currentAge"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      Vârsta actuală
                    </FormLabel>
                    <FormControl>
                      <div className="relative group">
                        <Input
                          type="number"
                          placeholder="35"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                          className="w-full px-6 py-4 text-lg font-semibold border-2 border-border rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all bg-background/50 hover:bg-background group-hover:shadow-premium backdrop-blur-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 to-forest-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-sm font-medium" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="monthlySalary"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-foreground flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                      Salariul brut lunar (RON)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="5000"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="contributionYears"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-foreground flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-indigo-600" />
                      Ani de contribuție
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="10"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pensionType"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Award className="w-4 h-4 text-orange-600" />
                      Tipul pensiei
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selectează tipul pensiei" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="standard">Pensie pentru limită de vârstă</SelectItem>
                        <SelectItem value="early-partial">Pensie anticipată parțială</SelectItem>
                        <SelectItem value="early-complete">Pensie anticipată completă</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={calculateMutation.isPending}
            >
              {calculateMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Se calculează...
                </>
              ) : (
                <>
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculează Pensia
                </>
              )}
            </Button>
          </form>
        </Form>

        {result && (
          <Alert className="border-purple-200 bg-purple-50">
            <CheckCircle className="h-4 w-4 text-purple-600" />
            <AlertDescription>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-purple-800">Rezultatul calculului</h4>
                </div>
                <div className="p-3 rounded-md bg-white border border-purple-200">
                  <p className="text-xl font-bold text-purple-800 mb-1">
                    {result.amount.toLocaleString()} RON/lună
                  </p>
                  <p className="text-sm text-purple-700">{result.details}</p>
                </div>
                
                {(result.breakdown.penalties > 0 || result.breakdown.contributionBonus > 0) && (
                  <div className="space-y-2">
                    {result.breakdown.penalties > 0 && (
                      <div className="flex items-center justify-between p-2 rounded bg-red-50 border border-red-200">
                        <span className="text-xs font-medium text-red-700">Penalizare</span>
                        <span className="text-sm font-semibold text-red-600">
                          -{result.breakdown.penalties.toLocaleString()} RON
                        </span>
                      </div>
                    )}
                    {result.breakdown.contributionBonus > 0 && (
                      <div className="flex items-center justify-between p-2 rounded bg-orange-50 border border-orange-200">
                        <span className="text-xs font-medium text-orange-700">Bonus vechime</span>
                        <span className="text-sm font-semibold text-orange-600">
                          +{result.breakdown.contributionBonus.toLocaleString()} RON
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
