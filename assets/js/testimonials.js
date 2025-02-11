let testimonials = [
    {
        author: "amir mahfud",
        rating: 5,
        caption: " keren abisss!",
        image:"img pro.jpg"
    },
    {
        author: "Alex joshua",
        rating: 5,
        caption: " keren bangettttt!",
        image:"coding_background..webp"
    },
    {
        author: "Nurul Rahmadhani",
        rating: 4,
        caption: " sangat keren!",
        image:"img pro.jpg"
    },
    {
        author: "Amelia Kulsum",
        rating: 4,
        caption: " Kamu Hebat!",
        image:"coding_background..webp"
    },
    {
        author: "Septania Nova",
        rating: 2,
        caption: "Good",
        image:"coding_background..webp"
    }
   
]
 const testimonialsContainer = document.getElementById("testimonialsContainer");

 const testimonialsHTML = (daftarTestimoni) => {
    return daftarTestimoni.map(
        (testimonial) => `    
    <article>
        <img src="assets/img/${testimonial.image} alt="Testimonials-imagee">
        <P class="testimonials-list-cption"> "${testimonial.caption}"</P>
        <p style="text-align: right;">${testimonial.author}</p>
        <p style="text-align: right; font-weight: bold;" >${testimonial.rating}</p>
    </article>
        `
    )
    .join("");
 };
 
 function showAllTestimonials() {
    testimonialsContainer.innerHTML = testimonialsHTML(testimonials);
 }

 showAllTestimonials();

 function filterTestimonialsByStar(rating) {
    const filteredTestimonials = testimonials.filter (
        (testimonial) => testimonial.rating === rating 
    );

    console.log(filteredTestimonials) ;

if(filteredTestimonials.length === 0) {
    return (testimonialsContainer.innerHTML =`<p>No testimonials.</p>`);
}

    testimonialsContainer.innerHTML = testimonialsHTML(filteredTestimonials);
 }