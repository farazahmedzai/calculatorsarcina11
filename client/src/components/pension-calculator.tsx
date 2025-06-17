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
      <CardContent className="space-y-10 p-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="currentAge"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base font-bold text-foreground flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-gold-500/10 border border-gold-200/50">
                        <Users className="w-5 h-5 text-gold-600" />
                      </div>
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
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base font-bold text-foreground flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-forest-500/10 border border-forest-200/50">
                        <TrendingUp className="w-5 h-5 text-forest-600" />
                      </div>
                      Salariul brut lunar (RON)
                    </FormLabel>
                    <FormControl>
                      <div className="relative group">
                        <Input
                          type="number"
                          placeholder="5000"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                          className="w-full px-6 py-4 text-lg font-semibold border-2 border-border rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all bg-background/50 hover:bg-background group-hover:shadow-premium backdrop-blur-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-forest-500/5 to-gold-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-sm font-medium" />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="contributionYears"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base font-bold text-foreground flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-crimson-500/10 border border-crimson-200/50">
                        <BarChart3 className="w-5 h-5 text-crimson-600" />
                      </div>
                      Ani de contribuție
                    </FormLabel>
                    <FormControl>
                      <div className="relative group">
                        <Input
                          type="number"
                          placeholder="10"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                          className="w-full px-6 py-4 text-lg font-semibold border-2 border-border rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all bg-background/50 hover:bg-background group-hover:shadow-premium backdrop-blur-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-crimson-500/5 to-gold-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-sm font-medium" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pensionType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base font-bold text-foreground flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-slate-500/10 border border-slate-200/50">
                        <Award className="w-5 h-5 text-slate-600" />
                      </div>
                      Tipul pensiei
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <div className="relative group">
                          <SelectTrigger className="w-full px-6 py-4 text-lg font-semibold border-2 border-border rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all bg-background/50 hover:bg-background group-hover:shadow-premium backdrop-blur-sm">
                            <SelectValue placeholder="Selectează tipul pensiei" />
                          </SelectTrigger>
                          <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-gold-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                      </FormControl>
                      <SelectContent className="rounded-2xl border-2 border-border/50 shadow-premium-lg backdrop-blur-xl">
                        <SelectItem value="standard" className="py-3 px-4 rounded-xl">Pensie pentru limită de vârstă</SelectItem>
                        <SelectItem value="early-partial" className="py-3 px-4 rounded-xl">Pensie anticipată parțială</SelectItem>
                        <SelectItem value="early-complete" className="py-3 px-4 rounded-xl">Pensie anticipată completă</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-sm font-medium" />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="relative w-full h-16 text-xl font-black rounded-2xl shadow-premium-lg hover:shadow-glow transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group overflow-hidden"
              disabled={calculateMutation.isPending}
            >
              <div className="absolute inset-0 gradient-primary opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-forest-400/20 opacity-0 group-hover:opacity-100 transition-opacity animate-gradient"></div>
              <div className="relative flex items-center justify-center text-white">
                {calculateMutation.isPending ? (
                  <>
                    <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                    Se calculează...
                  </>
                ) : (
                  <>
                    <Calculator className="w-6 h-6 mr-3" />
                    Calculează Pensia
                  </>
                )}
              </div>
            </Button>
          </form>
        </Form>

        {result && (
          <div className="relative group animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-forest-500/20 rounded-2xl blur-xl opacity-60"></div>
            <Alert className="relative glass border border-gold-200/50 dark:border-gold-700/50 rounded-2xl p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-50/50 to-forest-50/30 dark:from-gold-900/20 dark:to-forest-900/20 rounded-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-200/50">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gradient">Rezultatul calculului</h4>
                </div>
                <AlertDescription>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-200/30">
                      <p className="text-3xl font-black text-gradient-warm mb-2">
                        {result.amount.toLocaleString()} RON/lună
                      </p>
                      <p className="text-base text-muted-foreground font-medium">{result.details}</p>
                    </div>
                    
                    <div className="grid gap-3">
                      {result.breakdown.penalties > 0 && (
                        <div className="flex items-center justify-between p-3 rounded-xl bg-red-50/50 border border-red-200/30">
                          <span className="text-sm font-semibold text-red-700">Penalizare</span>
                          <span className="text-base font-bold text-red-600">
                            -{result.breakdown.penalties.toLocaleString()} RON
                          </span>
                        </div>
                      )}
                      {result.breakdown.contributionBonus > 0 && (
                        <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/30">
                          <span className="text-sm font-semibold text-emerald-700">Bonus vechime</span>
                          <span className="text-base font-bold text-emerald-600">
                            +{result.breakdown.contributionBonus.toLocaleString()} RON
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </AlertDescription>
              </div>
            </Alert>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
