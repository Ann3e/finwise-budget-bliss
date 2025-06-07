
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    review: "FINWIN completely transformed how I manage my finances. The expense tracking is intuitive and the challenges make saving fun!",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    review: "The coffee calculator was a real eye-opener! I had no idea I was spending that much. Now I'm saving $200 a month.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    review: "Great app for beginners. The budget allocation sliders are genius - finally understand where my money goes.",
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Wilson",
    rating: 5,
    review: "The income tracker helped me identify my most profitable side hustles. Premium features are worth every penny!",
    avatar: "DW"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    rating: 5,
    review: "Love the financial challenges! Made saving competitive and fun. Hit my emergency fund goal 3 months early.",
    avatar: "LT"
  },
  {
    id: 6,
    name: "Alex Kumar",
    rating: 4,
    review: "The wealth calculator motivated me to increase my savings rate. Seeing those projections really puts things in perspective.",
    avatar: "AK"
  }
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Users Say</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {getVisibleReviews().map((review, index) => (
            <Card 
              key={`${review.id}-${currentIndex}`} 
              className={`shadow-lg border-0 bg-white transform transition-all duration-500 hover:scale-105 ${
                index === 1 ? 'md:scale-105 bg-green-50' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{review.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
