
import { useState } from 'react';
import { CheckCircle, Star, Send } from 'lucide-react';


const Feedback = () => {
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        rating: 5,
        message: ''
    });


    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRating = (rating) => {
      setFormData({
        ...formData,
        rating
      });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };


  return (

<div>
    <div>

        {isSubmitted ? (
            <div>
                <div>
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                </div>
                <h2>Thank you for your feedback</h2>
                <p>Your feedback has been successfully submitted. We appreciate your thoughts!</p>
                <button>Give another feedback</button>
            </div>
        ) : ( 
            <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Share Your Feedback</h2>
              <p className="text-gray-500 text-sm mt-2">We value your opinion to serve you better.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* নাম ইনপুট */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* স্টার রেটিং সেকশন */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
                <div className="flex items-center space-x-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => handleRating(star)}
                      className="focus:outline-none transform hover:scale-110 transition-transform"
                    >
                      <Star 
                        size={28} 
                        className={`${
                          star <= formData.rating 
                            ? 'fill-amber-400 text-amber-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* মেসেজ বা মতামত টেক্সট-এরিয়া */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your experience..." 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* সাবমিট বাটন */}
              <button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Send size={16} />
                Submit Feedback
              </button>
            </form>
          </>
            


        )};
    </div>
</div>



    
  )
}

export default Feedback;
