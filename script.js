const testimonialsContainer=document.querySelector('.testimonials-container')
const testimonial=document.querySelector('.testimonial')
const userImage=document.querySelector('.user-image')
const userName=document.querySelector('.username')
const role=document.querySelector('.role')

const testimonials=[
    {
        name: 'mohsen',
        position: 'iran',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, id deleniti? Dolorem fugiat reiciendis minus quibusdam numquam. Dolores eum repudiandae odio corporis quasi, commodi, quam, magni voluptatem quas tenetur sed.'
    },
    {
        name: 'asghar',
        position: 'ahavz',
        photo: 'https://randomuser.me/api/portraits/women/47.jpg',
        text : 'Lorem ipsum dolor sicing elit. Impedit, id deleniti? Dolorem fugiat reiciendis minus quibusdam numquam. Dolores eum repudiandae odio corporis quasi, commodi, quam, magni voluptatem quas tenetur sed.'
    },
    {
        name: 'meysam',
        position: 'neyriz',
        photo: 'https://randomuser.me/api/portraits/women/41.jpg',
        text : 'Lorem ipsum dolor sicing elit. Impedit, id dsicing elit. Impedit, id dsicing elit. Impedit, id dsicing elit. Impedit, id dsicing elit. Impedit, id deleniti? Dolorem fugiat reiciendis minus quibusdam numquam. Dolores eum repudiandae odio corporis quasi, commodi, quam, magni voluptatem quas tenetur sed.'
    },
]


let idx=1
function updateTestimonial(){
    const {name,position,photo,text}= testimonials[idx]
    testimonial.innerHTML=text
    userImage.src=photo
    userName.innerHTML=name
    role.innerHTML=position
    
        idx++

        if(idx > testimonials.length - 1){
idx=0
        }
}
setInterval(updateTestimonial,10000)

