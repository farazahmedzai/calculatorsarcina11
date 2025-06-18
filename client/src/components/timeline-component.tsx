import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  type?: 'milestone' | 'deadline' | 'important';
  completed?: boolean;
}

interface TimelineComponentProps {
  title: string;
  items: TimelineItem[];
  className?: string;
}

export function TimelineComponent({ title, items, className = "" }: TimelineComponentProps) {
  const getIconForType = (type: string = 'milestone') => {
    switch (type) {
      case 'deadline':
        return <Clock className="w-5 h-5" />;
      case 'important':
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const getColorForType = (type: string = 'milestone') => {
    switch (type) {
      case 'deadline':
        return 'bg-red-500';
      case 'important':
        return 'bg-green-500';
      default:
        return 'bg-primary';
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-neutral-800 mb-12 text-center">{title}</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200"></div>
          
          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 ${getColorForType(item.type)} rounded-full text-white flex-shrink-0`}>
                  {getIconForType(item.type)}
                </div>
                
                {/* Content */}
                <Card className="ml-6 flex-1 bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-800 mb-1">{item.title}</h3>
                        <p className="text-sm text-neutral-500">{item.date}</p>
                      </div>
                      {item.completed && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Completat
                        </Badge>
                      )}
                    </div>
                    <p className="text-neutral-700 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sample timeline data for pension planning
export const pensionTimelineItems: TimelineItem[] = [
  {
    date: "În prezent",
    title: "Evaluează situația actuală",
    description: "Calculează pensia estimată și identifică lacunele în planificarea ta financiară.",
    type: "important"
  },
  {
    date: "Următoarele 6 luni",
    title: "Organizează documentele",
    description: "Strânge toate documentele necesare: carnetul de muncă, adeverințe de salarii, dovezi de stagiu.",
    type: "deadline"
  },
  {
    date: "Anual",
    title: "Verifică extrasul de cont CAS",
    description: "Solicită extrasul de cont de la Casa de Pensii pentru a verifica corectitudinea datelor.",
    type: "milestone"
  },
  {
    date: "Cu 5 ani înainte",
    title: "Planifică tranziția",
    description: "Începe să planifici tranziția către pensie și să evaluezi opțiunile de pensionare anticipată.",
    type: "important"
  },
  {
    date: "Cu 6 luni înainte",
    title: "Depune dosarul de pensionare",
    description: "Depune dosarul la Casa de Pensii cu toate documentele necesare pentru a evita întârzierile.",
    type: "deadline"
  }
];