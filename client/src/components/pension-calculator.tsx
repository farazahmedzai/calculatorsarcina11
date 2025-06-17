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
import { Loader2, CheckCircle, Calculator } from "lucide-react";
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
    <Card className="w-full max-w-2xl mx-auto shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-neutral-800 flex items-center justify-center gap-2">
          <Calculator className="w-6 h-6 text-primary" />
          Calculator Pensie Principală
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="currentAge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-neutral-700">
                    Vârsta actuală
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="35"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                  <FormLabel className="text-sm font-medium text-neutral-700">
                    Salariul brut lunar (RON)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="5000"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contributionYears"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-neutral-700">
                    Stagiul de cotizare (ani)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="10"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                  <FormLabel className="text-sm font-medium text-neutral-700">
                    Tipul pensiei
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                        <SelectValue placeholder="Selectează tipul pensiei" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Pensie pentru limită de vârstă">
                        Pensie pentru limită de vârstă
                      </SelectItem>
                      <SelectItem value="Pensie anticipată parțială">
                        Pensie anticipată parțială
                      </SelectItem>
                      <SelectItem value="Pensie anticipată completă">
                        Pensie anticipată completă
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-lg font-semibold text-lg transition-colors"
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
