import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calculator, CheckCircle, Loader2, Users, TrendingUp, BarChart3 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { insertPensionCalculationSchema } from "@/../../shared/schema";
import { z } from "zod";
import type { PensionCalculationResult } from "@/lib/pension-calculator";

type PensionCalculationForm = z.infer<typeof insertPensionCalculationSchema>;

export function PensionCalculator() {
  const [result, setResult] = useState<PensionCalculationResult | null>(null);
  
  const form = useForm<PensionCalculationForm>({
    resolver: zodResolver(insertPensionCalculationSchema),
    defaultValues: {
      currentAge: 35,
      monthlySalary: 5000,
      contributionYears: 10,
      pensionType: "",
    },
  });

  const calculateMutation = useMutation({
    mutationFn: async (data: PensionCalculationForm) => {
      const response = await fetch("/api/calculate-pension", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error('Calculation failed');
      }
      return response.json();
    },
    onSuccess: (data: PensionCalculationResult) => {
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
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="overflow-hidden rounded-2xl bg-gradient-to-br from-white to-indigo-50 border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <CardTitle className="flex items-center space-x-3 text-xl font-bold">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <span>Calculator Pensie</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                        <Input
                          type="number"
                          placeholder="35"
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

              <div className="grid md:grid-cols-2 gap-6">
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
                        <Calculator className="w-4 h-4 text-green-600" />
                        Tipul pensiei
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selectează tipul pensiei" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="standard">Pensie standard</SelectItem>
                          <SelectItem value="anticipata_partiala">Pensie anticipată parțială</SelectItem>
                          <SelectItem value="anticipata_completa">Pensie anticipată completă</SelectItem>
                          <SelectItem value="invaliditate">Pensie de invaliditate</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
            <div className="mt-8 space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-green-800">Rezultatul Calculului</h4>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-green-200 shadow-sm">
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold text-green-700 mb-2">
                      {result.amount.toLocaleString()} RON/lună
                    </p>
                    <p className="text-green-600 font-medium">{result.details}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Pensia de bază</p>
                      <p className="text-lg font-semibold text-gray-800">
                        {result.breakdown.basePension.toLocaleString()} RON
                      </p>
                    </div>
                    
                    {result.breakdown.contributionBonus > 0 && (
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-600 mb-1">Bonus contribuție</p>
                        <p className="text-lg font-semibold text-blue-700">
                          +{result.breakdown.contributionBonus.toLocaleString()} RON
                        </p>
                      </div>
                    )}
                    
                    {result.breakdown.penalties > 0 && (
                      <div className="text-center p-4 bg-red-50 rounded-lg">
                        <p className="text-sm text-red-600 mb-1">Penalizări</p>
                        <p className="text-lg font-semibold text-red-700">
                          -{result.breakdown.penalties.toLocaleString()} RON
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}