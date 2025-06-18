import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  className?: string;
}

export function FAQSection({ title = "Întrebări Frecvente", faqs, className = "" }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-neutral-800">{title}</h2>
          </div>
          <p className="text-xl text-neutral-600">
            Răspunsuri la cele mai comune întrebări despre pensii
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full justify-between p-6 h-auto text-left hover:bg-neutral-50"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-semibold text-neutral-800 pr-4">{faq.question}</span>
                  {openItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </Button>
                
                {openItems.has(index) && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-neutral-200">
                      <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Common FAQ data for pension topics
export const pensionFAQs: FAQItem[] = [
  {
    question: "La ce vârstă mă pot pensiona în România?",
    answer: "Vârsta standard de pensionare este 65 de ani pentru bărbați și femei (egalizarea se face treptat până în 2030). Poți opta și pentru pensionarea anticipată începând cu 60 de ani, dar cu penalizări."
  },
  {
    question: "Câți ani de contribuții am nevoie pentru pensie?",
    answer: "Pentru pensia pentru limită de vârstă ai nevoie de minimum 15 ani de stagiu de cotizare. Pentru pensia anticipată completă sunt necesari 35 de ani de contribuții."
  },
  {
    question: "Cum se calculează pensia în România?",
    answer: "Pensia se calculează pe baza punctelor de pensie acumulate înmulțite cu valoarea punctului de pensie (87,5 RON în 2025). Punctele se acordă în funcție de contribuțiile plătite și stagiul de cotizare."
  },
  {
    question: "Ce este pilonul II de pensii?",
    answer: "Pilonul II este sistemul de pensii private obligatoriu. Contribuția este de 3.75% din salariu și se investește în fonduri de pensii private administrate de companii specializate."
  },
  {
    question: "Pot cumula pensia cu salariul?",
    answer: "Da, poți cumula pensia cu salariul dacă continui să lucrezi după pensionare. Nu există restricții pentru cumularea acestor venituri în sistemul românesc."
  },
  {
    question: "Ce documente am nevoie pentru dosarul de pensie?",
    answer: "Principalele documente sunt: carnetul de muncă, certificatul de naștere, certificatul de căsătorie (dacă e cazul), adeverințe de salarii, dovezi de stagiu militar și orice alte documente care atestă activitatea profesională."
  },
  {
    question: "Când se indexează pensiile și cu cât?",
    answer: "Pensiile se indexează anual, de regulă din ianuarie. Indicele de creștere se stabilește în funcție de inflație și creșterea salariului mediu brut. În 2025, indexarea medie a fost de 13.8%."
  },
  {
    question: "Ce se întâmplă cu pensia dacă lucrez în străinătate?",
    answer: "Dacă lucrezi în țări UE, stagiile de cotizare se cumulează. Pentru țări non-UE, depinde de acordurile bilaterale. Este important să păstrezi dovezile contribuțiilor plătite în străinătate."
  }
];

export const pregnancyFAQs: FAQItem[] = [
  {
    question: "Cât de precis este calculatorul de sarcină?",
    answer: "Calculatorul oferă o estimare bazată pe date medicale standard. Precizia depinde de regularitatea ciclului menstrual. Pentru data exactă, consultă medicul ginecolog și fă ecografii de datare."
  },
  {
    question: "Ce înseamnă vârsta gestațională?",
    answer: "Vârsta gestațională se calculează de la prima zi a ultimei menstruații (LMP) și se exprimă în săptămâni și zile. Este standardul medical folosit pentru monitorizarea sarcinii."
  },
  {
    question: "Când încep simptomele sarcinii?",
    answer: "Primele simptome apar de obicei în săptămânile 4-6 de sarcină: absența menstruației, greața matinală, senzitivitatea sânilor și oboseala. Simptomele variază de la o femeie la alta."
  },
  {
    question: "Când se face prima ecografie?",
    answer: "Prima ecografie se recomandă între săptămânile 6-10 pentru confirmarea sarcinii și datarea acesteia. Ecografia de datare este cea mai precisă în primul trimestru."
  },
  {
    question: "Câte trimestre are sarcina?",
    answer: "Sarcina are 3 trimestre:\n• Trimestrul I: săptămânile 1-12\n• Trimestrul II: săptămânile 13-27\n• Trimestrul III: săptămânile 28-40"
  },
  {
    question: "Ce analize sunt necesare în sarcină?",
    answer: "Analizele principale includ: hemoleucograma, glicemia, grupa sanguină și Rh, VDRL, HIV, hepatita B și C, toxoplasmoza, rubeoala și screeningul genetic în primul trimestru."
  }
];