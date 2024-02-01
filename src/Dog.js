import './Dog.css';
import Pup from './puppy.png';
import para from './paradigm.png';
import 'tachyons';



const Dog = ({routes}) => {
return (
   
  <div className='bigstuffss'>
    <div className='naverss'>
        <header>
        <img src={Pup}  height='100px' className='mr5' width='auto' alt='Paradigm logo'/>
        <img src={para} alt='paradigm' height='90px' width='500px'/>
       <br/>
       <nav class="bt bb tc mw7 center mt4">
    <p onClick={routes.homes} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Home</p>
    <p onClick={routes.cats} class="f6 f5-l link pointer bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Cats</p>
    <p onClick={routes.dogs} class="f6 f5-l link bg-animate pointer black-80 bg-lightest-blue dib pa3 ph4-l" >Dogs</p>
    <p onClick={routes.fish} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Fish</p>
    <p onClick={routes.contact} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Contact</p>
  </nav>
  </header>
  </div>
  <div className='containerss'>
  <main>
    <div className='themainss ba ma5'>
      <p className='ml2 mr3'>The domestic dog is an extremely social animal and offers a diverse variety of <br/>
      choices as there are well over 300 breeds recognized by the World Canine Organization.<br/>
       Adopting a dog offers mutual benefits between dog and owner. Many studies cite the social <br/>
       benefits of having a companion as well as the reduced feelings of loneliness from adopting a dog.<br/>
        Studies even show medical indicators such as reduced blood pressure and improved lipid profiles.<br/>
         If you have a dog, it is important to make sure that you care for your dog; be mindful of what you <br/>
         feed your dog and provide enough opportunities for exercise. In this page,<br/>
       you will find more information about how to care for your pets throughout the various stages of their lives.</p>
     <div className='theinfos'>
    <div className=' ml4 mb2 grow ba bw2 infos1'  > <h4>Diet</h4> 
    <hr/>
    <p className='ml2 mr2'>Throughout dogs’ lifespans, they<br/> should generally be fed<br/> fewer meals as they mature.<br/> Puppies should be nursed<br/> the first two months, then<br/> introduced to three meals<br/> per day when they are about<br/> three to six months years old.<br/> Their food intake should be<br/> reduced to two meals per day<br/> when they are six months<br/> to one year old and finally<br/> reduced to one meal after they <br/>reach one year old. And<br/> a dog’s typical body mass <br/>is composed of somewhere between<br/> 60 and 70 percent water.<br/> The ASPCA says just a 10 percent<br/> decrease in body water can cause illness,<br/> and a 15 percent loss can cause death,<br/> so make sure you keep your pooch hydrated!</p>
     
    </div>
    <div className=' ml4 mb2 grow ba bw2 infos2'  > <h4>Grooming & Handling</h4> 
    <hr/>
    <p className='ml2 mr2'>Keeping your furry family member clean is <br/>important to its health. So be sure to brush
    <br/> frequently to reduce the amount of shedding<br/> and prevent matted and tangled fur that<br/>
     can prove to be extremely difficult to remove.<br/> Check for insects such as ticks and fleas,<br/>
      especially after visiting heavily wooded areas. <br/>Bathing is not only important to your dog’s health<br/>
       but can be an exercise depending on how<br/> strong willed the dog is. Rinse all of the soap out,
       <br/> as any residual soap can result in a rash.<br/> Be sure the soap is formulated for your<br/>
        puppy or dog, since harsh soaps can cause<br/> allergic reactions. And as always, be careful<br/>
         how you handle your loved one. No<br/> matter the size of your dog, you need to be <br/>
         cautious as you carry your canine.<br/> If you have a small dog, then cradle<br/> the pup with
          one hand under the chest<br/> and the forearm supporting the back half.<br/> If it is a large dog, 
          reach under the belly with <br/>both your arms perpendicular<br/> to the dog, and use each arm<br/> to support the chest and rear <br/>as you lift.</p>
    </div>
    <div className=' ml4 mb2 mr4 grow ba bw2 infos3'  > <h4>Vaccinations & Medications</h4> 
    <hr/>
    <p className='ml2 mr2'>You should always consult with<br/> your veterinarian, but there <br/>
    is a core set of vaccines<br/> that are typically recommended.<br/> Vaccines that reduce the exposure<br/> risk to things such as hepatitis, rabies,<br/> and parvovirus. Others may be<br/> determined by your vet depending<br/> on the environment in which the<br/> dog resides. Some of these include <br/>Bordetella bronchiseptica, Borrelia burgdorferi, <br/>and Leptospira bacteria.</p>
    </div>
     </div>
     <div className='underinfos mb2 grow ba bw2'> <h4>Exercise</h4>
     <hr/>
     <p>Much like humans, dogs need to have a healthy 
     level of activity to keep their organs healthy, as well as sun and <br/> fresh air. The
      minimum recommended time for exercise varies greatly with
      breed and size differences, but generally a range of <br/>30–120 minutes
      of exercise is recommended per day! Can you imagine exercising
       two hours per day? OK, I know that<br/> wouldn't bother some 
       of you reading this. But the thought of it to me makes me cringe! 
       And by the way, exercising your<br/> dog does not mean 
       you are being challenged to a push-up contest. Brisk walks are OK too!<br/>
        You can also choose from a variety of toys to encourage
         physical activity; just be sure they are age appropriate<br/> 
     and do not pose a choking hazard. Pay careful attention to toys that require supervision.</p></div>
      
      </div>
  </main>
  <aside className='sidess bw2 ml ba mt5'>
    <p className='ml2 mr2'> Looking for your new best friend? <br/>
    The following organizations can <br/> help you find and adopt the <br/> perfect companion.</p>
    <hr/>
    <a className='ml3' href='https://theshelterpetproject.org/'>General Adoption Recourses</a>
    <br/><br/>
    <a className='ml3' href='https://www.aspca.org/'>ASPCA</a>
    <br/><br/>
    <a className='ml3' href='https://www.sterlingshelter.org/humane-society/koi-fish-rescue/'>Fish Rescue</a>
    <br/><br/>
    <a className='ml3' href='https://savethesnakes.org/snakerescuecall/'>Snake Rescue</a>
    <br/><br/>
    <a className='ml3' href='https://ftlob.rescuegroups.org/'>Bird Rescue</a>
    <br/>
    <br/>
  </aside>
  
  </div>
  <footer className='footss'> <p>Evidence-based pet care advice for every pet lover</p>
  <p>Paradigm Pet Professionals has 12 years’ experience working with pet owners,
     certifications <br/>in pet health and nutrition, and customer recognition for outstanding support </p>
 <p>Services: virtual consultations and presentations, one-on-one consultations concerning <br/>
  individual pets,
   group presentations regarding general pet care (can be tailored to the needs of the group)</p>
  </footer>

  </div>
);
}

export default Dog;