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
    <Card className="w-full mx-auto glass border-0 overflow-hidden">
      <CardHeader className="gradient-primary text-white text-center py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-gradient"></div>
        <div className="relative">
          <CardTitle className="text-3xl font-black flex items-center justify-center gap-4 mb-3">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-2xl blur-lg"></div>
              <div className="relative bg-white/20 rounded-2xl p-3 backdrop-blur-xl">
                <Calculator className="w-8 h-8" />
              </div>
            </div>
            Calculator Pensie Premium
          </CardTitle>
          <p className="text-blue-100 mt-3 text-lg font-medium">
            Calculează pensia <span className="text-yellow-300 font-bold">rapidă și precisă</span>
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-1 w-8 bg-white/30 rounded-full"></div>
            <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
            <div className="h-1 w-8 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-8 p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="currentAge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      Vârsta actuală
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="35"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50 hover:bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="monthlySalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      Salariul brut lunar (RON)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="5000"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50 hover:bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="contributionYears"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-purple-600" />
                      Ani de contribuție
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="10"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50 hover:bg-white"
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
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <Award className="w-4 h-4 text-orange-600" />
                      Tipul pensiei
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50 hover:bg-white">
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
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]"
              disabled={calculateMutation.isPending}
            >
              {calculateMutation.isPending ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Se calculează...
                </>
              ) : (
                "Calculează Pensia"
              )}
            </Button>
          </form>
        </Form>

        {result && (
          <Alert className="bg-accent/10 border-accent/20">
            <CheckCircle className="h-4 w-4 text-accent" />
            <AlertDescription>
              <div className="space-y-2">
                <h4 className="font-semibold text-accent">Rezultatul calculului:</h4>
                <p className="text-lg font-bold text-neutral-800">
                  {result.amount.toLocaleString()} RON/lună
                </p>
                <p className="text-sm text-neutral-600">{result.details}</p>
                {result.breakdown.penalties > 0 && (
                  <p className="text-sm text-red-600">
                    Penalizare: -{result.breakdown.penalties.toLocaleString()} RON
                  </p>
                )}
                {result.breakdown.contributionBonus > 0 && (
                  <p className="text-sm text-green-600">
                    Bonus vechime: +{result.breakdown.contributionBonus.toLocaleString()} RON
                  </p>
                )}
              </div>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
