import './Home.css';
import Pup from './puppy.png';
import para from './paradigm.png';
import 'tachyons';
import cat from './cat.png';
import dog from './dog.png';
import fish from './fish.png';

const Home = ({routes}) => {
return (
   
  <div className='bigstuff'>
    <div className='navs'>
        <header>
        <img src={Pup}  height='100px' className='mr5' width='auto' alt='Paradigm logo'/>
        <img src={para} alt='paradigm' height='90px' width='500px'/>
       <br/>
  <nav class="bt bb tc mw7 center mt4">
    <p onClick={routes.homes} class="f6 f5-l link bg-animate pointer black-80 bg-lightest-blue dib pa3 ph4-l" >Home</p>
    <p onClick={routes.cats} class="f6 f5-l link pointer bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Cats</p>
    <p onClick={routes.dogs} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Dogs</p>
    <p onClick={routes.fish} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Fish</p>
    <p onClick={routes.contact} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Contact</p>
  </nav>
  </header>
  </div>
  <div className='container'>
  <main>
    <div className='themain ba ma5'>
      
      <p className='ml4 mr4'> Pets are nature's gift to humanity. It has been scientifically proven that opening
        our homes and hearts to a pet <br/> increases our longevity and impoves our overall quality of life
        as well as the lives of our pets. At Paradigm Pet <br/> Professionals, our mission is to offer resources to
        help you care for your furry, scaly, feathery, and slimy loved <br/> ones. Our pet experts- or "Pexperts"
        - have been working with pet owners and professionals alike for the past <br/> twelve years.
        They offer one-on-one consultations with current and prospective pet owners as well as group <br/>
        presentations designed for veterinary, pet shelter, and pet breeding professionals.
      </p>

      <br/>
      <p>Looking for basic pet care advice for the most common type of pets? Need Additional help determining
        <br/> which type of pet is right for you and your family? We will work with you and provide tailored
        evidence-based <br/> pet care to ensure lifelong health and wellness of your new companion.
        <br/> <br/> Click on one of the images below for more information.
      </p>
      <div className='linkage'>
      <img onClick={routes.cats} className='kitties grow ml5 mt2 mb4 pointer' src={cat} height={150}/>
      <img onClick={routes.dogs} className='doggies ml4 grow mb4 mt2 pointer' src={dog} width={220}height={150}/>
      <img onClick={routes.fish} className='fishies ml4 mt2 grow mb4 pointer' src={fish} height={150}/>
      

      </div>
      <p>We are also happy to help you navigate the adoption process!<br/>
      We will guide you through each step in the process from determining which type of pet
      <br/> is best suited for your family and and home environment, to completing the necessary parperwork,
      <br/> to bringing your new loved one home. Please fill out our <a href='#'>Contact Form</a> to request
      a cosultation.<br/> We will contact you within 48 hours to schedule a consultation. <br/>
      All fields are required.
      </p> 
      </div>
  </main>
  <aside className='side bw2 ml ba mt5'>
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
  <footer className='foot'> <p>Evidence-based pet care advice for every pet lover</p>
  <p>Paradigm Pet Professionals has 12 years’ experience working with pet owners,
     certifications <br/>in pet health and nutrition, and customer recognition for outstanding support </p>
 <p>Services: virtual consultations and presentations, one-on-one consultations concerning <br/>
  individual pets,
   group presentations regarding general pet care (can be tailored to the needs of the group)</p>
  </footer>

  </div>
);
}

export default Home;