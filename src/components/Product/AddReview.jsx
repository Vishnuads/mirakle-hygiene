import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from "../ui/textarea";
import { Star } from 'lucide-react';

const AddReview = () => {

    const [rating, setRating] = useState(0);

    // function handleRating(value){
    //     setRating(value);
    // }

    return (
        <section className="my-8 flex justify-center">
            <div className="bg-white  p-6 w-full max-w-lg border rounded-3">
                <p className="text-2xl font-semibold mb-4 text-gray-800">
                    Add Your Review
                </p>
                <div className="flex items-center gap-2 my-3">
                    {[1, 2, 3, 4, 5].map((id) => (
                        <button onClick={()=> setRating(id)}>
                            <Star key={id} size={18}  className={`${id <= rating ? 'text-yellow-500 fill-amber-400' : 'text-gray-400'}  `} />
                        </button>
                        
                    ))}
                    <p className='mb-0'>{rating}.0</p>
                </div>
                <form className="space-y-4 flex flex-col">
                    {/* Review field */}
                    <div>
                        <Textarea
                            name="review"
                            id="review"
                            rows={4}
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Share your experience..."
                            required
                        />
                    </div>
                    {/* File input */}
                    <div>
                        <Input
                            type="file"
                            id="file-upload"
                            name="file-upload"
                            className="block w-full text-sm text-gray-600 border"
                            accept="image/*"
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-[#3B5875] rounded-3 btn-buy transition text-white px-6 py-2 rounded-md font-medium shadow"
                        >
                            Share Review
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddReview;
