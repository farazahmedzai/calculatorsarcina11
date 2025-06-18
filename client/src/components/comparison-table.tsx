import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, AlertCircle } from "lucide-react";

interface ComparisonItem {
  feature: string;
  options: {
    [key: string]: string | boolean | number;
  };
}

interface ComparisonTableProps {
  title: string;
  subtitle?: string;
  columns: string[];
  items: ComparisonItem[];
  className?: string;
}

export function ComparisonTable({ 
  title, 
  subtitle, 
  columns, 
  items, 
  className = "" 
}: ComparisonTableProps) {
  const renderCell = (value: string | boolean | number) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    
    if (typeof value === 'string' && value.startsWith('badge:')) {
      const badgeText = value.replace('badge:', '');
      return (
        <Badge variant="secondary" className="mx-auto">
          {badgeText}
        </Badge>
      );
    }
    
    return <span className="text-neutral-700">{value}</span>;
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-neutral-600">{subtitle}</p>
          )}
        </div>

        <Card className="bg-white shadow-lg overflow-hidden">
          <CardHeader className="bg-neutral-50 border-b">
            <CardTitle className="text-center">Comparație Detaliată</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Caracteristică</th>
                    {columns.map((column, index) => (
                      <th key={index} className="px-6 py-4 text-center font-semibold min-w-[150px]">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {items.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                      <td className="px-6 py-4 font-medium text-neutral-800">
                        {item.feature}
                      </td>
                      {columns.map((column, colIndex) => (
                        <td key={colIndex} className="px-6 py-4 text-center">
                          {renderCell(item.options[column])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex items-start p-4 bg-blue-50 rounded-lg border border-blue-200">
          <AlertCircle className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Notă importantă</h4>
            <p className="text-blue-800 text-sm">
              Acest tabel oferă o comparație generală. Pentru situația ta specifică, 
              consultă un specialist în planificare financiară sau contactează Casa de Pensii.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sample comparison data for pension types
export const pensionTypesComparison: ComparisonItem[] = [
  {
    feature: "Vârsta minimă de pensionare",
    options: {
      "Limită de vârstă": "65 ani",
      "Anticipată parțială": "60 ani", 
      "Anticipată completă": "Fără limită"
    }
  },
  {
    feature: "Stagiu minim necesar",
    options: {
      "Limită de vârstă": "15 ani",
      "Anticipată parțială": "15 ani",
      "Anticipată completă": "35 ani"
    }
  },
  {
    feature: "Penalizări aplicabile",
    options: {
      "Limită de vârstă": "badge:Fără penalizări",
      "Anticipată parțială": "0.5% pe lună",
      "Anticipată completă": "0.75% pe lună"
    }
  },
  {
    feature: "Flexibilitate în alegerea datei",
    options: {
      "Limită de vârstă": true,
      "Anticipată parțială": true,
      "Anticipată completă": true
    }
  },
  {
    feature: "Posibilitatea de a continua lucrul",
    options: {
      "Limită de vârstă": true,
      "Anticipată parțială": true,
      "Anticipată completă": true
    }
  }
];

// Pillar comparison data
export const pensionPillarsComparison: ComparisonItem[] = [
  {
    feature: "Tip sistem",
    options: {
      "Pilonul I": "Public, repartizare",
      "Pilonul II": "Privat obligatoriu",
      "Pilonul III": "Privat facultativ"
    }
  },
  {
    feature: "Contribuția (%)",
    options: {
      "Pilonul I": "25%",
      "Pilonul II": "3.75%",
      "Pilonul III": "Variabilă"
    }
  },
  {
    feature: "Administrare",
    options: {
      "Pilonul I": "Statul român",
      "Pilonul II": "Fonduri private",
      "Pilonul III": "Fonduri private"
    }
  },
  {
    feature: "Moștenire",
    options: {
      "Pilonul I": false,
      "Pilonul II": true,
      "Pilonul III": true
    }
  },
  {
    feature: "Flexibilitatea investițiilor",
    options: {
      "Pilonul I": "badge:Fără opțiuni",
      "Pilonul II": "badge:Limitată",
      "Pilonul III": "badge:Maximă"
    }
  }
];