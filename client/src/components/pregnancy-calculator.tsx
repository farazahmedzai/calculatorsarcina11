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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Loader2, 
  CheckCircle, 
  Calendar, 
  Baby, 
  Heart, 
  Clock,
  CalendarDays,
  Stethoscope,
  Gift
} from "lucide-react";
import { 
  calculatePregnancy, 
  validatePregnancyInput, 
  getWeekInfo,
  type PregnancyCalculationInput, 
  type PregnancyCalculationResult 
} from "@/lib/pregnancy-calculator";
import { apiRequest } from "@/lib/queryClient";

const pregnancyCalculationSchema = z.object({
  calculationType: z.enum(['lmp', 'conception', 'ultrasound'], {
    required_error: "Selectează metoda de calcul"
  }),
  lastMenstrualPeriod: z.string().optional(),
  cycleLength: z.number().min(21, "Ciclul minim este 21 zile").max(35, "Ciclul maxim este 35 zile").optional(),
  conceptionDate: z.string().optional(),
  ultrasoundDate: z.string().optional(),
  ultrasoundWeeks: z.number().min(4, "Minim 4 săptămâni").max(42, "Maxim 42 săptămâni").optional(),
  ultrasoundDays: z.number().min(0, "Minim 0 zile").max(6, "Maxim 6 zile").optional(),
});

type PregnancyCalculationForm = z.infer<typeof pregnancyCalculationSchema>;

export function PregnancyCalculator() {
  const [result, setResult] = useState<PregnancyCalculationResult | null>(null);
  
  const form = useForm<PregnancyCalculationForm>({
    resolver: zodResolver(pregnancyCalculationSchema),
    defaultValues: {
      calculationType: "lmp",
      cycleLength: 28,
      ultrasoundDays: 0,
    },
  });

  const calculationType = form.watch("calculationType");

  const calculateMutation = useMutation({
    mutationFn: async (data: PregnancyCalculationForm) => {
      // Calculate pregnancy locally
      const calculationInput: PregnancyCalculationInput = {
        calculationType: data.calculationType,
        lastMenstrualPeriod: data.lastMenstrualPeriod || "",
        cycleLength: data.cycleLength || 28,
        conceptionDate: data.conceptionDate,
        ultrasoundDate: data.ultrasoundDate,
        ultrasoundWeeks: data.ultrasoundWeeks,
        ultrasoundDays: data.ultrasoundDays,
      };

      const calculationResult = calculatePregnancy(calculationInput);
      
      // Save calculation to backend
      try {
        await apiRequest("POST", "/api/calculate-pregnancy", {
          ...calculationInput,
          calculatedDueDate: calculationResult.dueDate,
          currentWeek: calculationResult.currentWeek,
          currentDay: calculationResult.currentDay,
        });
      } catch (error) {
        console.warn("Failed to save pregnancy calculation:", error);
      }
      
      return calculationResult;
    },
    onSuccess: (data) => {
      setResult(data);
    },
  });

  const onSubmit = (data: PregnancyCalculationForm) => {
    const errors = validatePregnancyInput(data);
    if (errors.length > 0) {
      errors.forEach(error => {
        form.setError("root", { message: error });
      });
      return;
    }
    
    calculateMutation.mutate(data);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ro-RO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getTrimesterName = (trimester: number) => {
    switch (trimester) {
      case 1: return "Primul trimestru";
      case 2: return "Al doilea trimestru";
      case 3: return "Al treilea trimestru";
      default: return "Trimestru necunoscut";
    }
  };

  const getMilestoneIcon = (category: string) => {
    switch (category) {
      case 'appointment': return <Stethoscope className="w-4 h-4" />;
      case 'development': return <Baby className="w-4 h-4" />;
      case 'symptom': return <Heart className="w-4 h-4" />;
      case 'preparation': return <Gift className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="overflow-hidden rounded-2xl bg-gradient-to-br from-white to-pink-50 border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <CardTitle className="flex items-center space-x-3 text-xl font-bold">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Baby className="w-6 h-6 text-white" />
            </div>
            <span>Calculator Sarcină</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="calculationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Metoda de calcul</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selectează metoda de calcul" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="lmp">Data ultimei menstruații (LMP)</SelectItem>
                        <SelectItem value="conception">Data concepției</SelectItem>
                        <SelectItem value="ultrasound">Pe baza ecografiei</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {calculationType === "lmp" && (
                <>
                  <FormField
                    control={form.control}
                    name="lastMenstrualPeriod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data ultimei menstruații</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cycleLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Lungimea ciclului menstrual (zile)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {calculationType === "conception" && (
                <FormField
                  control={form.control}
                  name="conceptionDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data concepției</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {calculationType === "ultrasound" && (
                <>
                  <FormField
                    control={form.control}
                    name="ultrasoundDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data ecografiei</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="ultrasoundWeeks"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Săptămâni de sarcină</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ultrasoundDays"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zile suplimentare</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}

              {form.formState.errors.root && (
                <Alert variant="destructive">
                  <AlertDescription>
                    {form.formState.errors.root.message}
                  </AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0" 
                disabled={calculateMutation.isPending}
              >
                {calculateMutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                    Se calculează...
                  </>
                ) : (
                  <>
                    <Baby className="w-5 h-5 mr-3" />
                    Calculează Sarcina
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-6">
          {/* Main Results */}
          <Card className="overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle className="flex items-center space-x-3 text-xl font-bold">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span>Rezultatele calculului</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Data calculată a nașterii</div>
                    <div className="text-2xl font-bold text-primary">
                      {formatDate(result.dueDate)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Săptămâna curentă</div>
                    <div className="text-xl font-semibold">
                      {result.currentWeek} săptămâni + {result.currentDay} zile
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Trimestru</div>
                    <Badge variant="secondary" className="text-sm">
                      {getTrimesterName(result.trimester)}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Zile rămase</div>
                    <div className="text-xl font-semibold flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-blue-500" />
                      {result.daysRemaining} zile
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Data concepției</div>
                    <div className="text-lg">
                      {formatDate(result.conceptionDate)}
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-200/50">
                <div className="text-sm text-slate-600 mb-3 font-medium">Informații despre săptămâna {result.currentWeek}</div>
                <div className="space-y-3">
                  {(() => {
                    const weekInfo = getWeekInfo(result.currentWeek);
                    return (
                      <>
                        <div className="font-semibold text-slate-800 text-lg">{weekInfo.title}</div>
                        <div className="text-slate-600">{weekInfo.description}</div>
                        <div className="text-sm text-slate-500 font-medium">
                          Bebelușul are acum {weekInfo.size}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Milestones */}
          <Card className="overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
              <CardTitle className="flex items-center space-x-3 text-xl font-bold">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <CalendarDays className="w-6 h-6 text-white" />
                </div>
                <span>Jaloane importante</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                {result.milestones
                  .filter(milestone => milestone.week >= result.currentWeek)
                  .slice(0, 6)
                  .map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                        {getMilestoneIcon(milestone.category)}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold text-slate-800">{milestone.title}</span>
                          <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                            Săptămâna {milestone.week}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {milestone.description}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {formatDate(milestone.date)}
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}