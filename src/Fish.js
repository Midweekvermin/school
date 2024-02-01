import './Fish.css';
import Pup from './puppy.png';
import para from './paradigm.png';
import 'tachyons';



const Fish = ({routes}) => {
return (
   
  <div className='bigstuffsss'>
    <div className='naversss'>
        <header>
        <img src={Pup}  height='100px' className='mr5' width='auto' alt='Paradigm logo'/>
        <img src={para} alt='paradigm' height='90px' width='500px'/>
       <br/>
       <nav class="bt bb tc mw7 center mt4">
    <p onClick={routes.homes} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Home</p>
    <p onClick={routes.cats} class="f6 f5-l link pointer bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Cats</p>
    <p onClick={routes.dogs} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Dogs</p>
    <p onClick={routes.fish} class="f6 f5-l link bg-animate pointer black-80 bg-lightest-blue dib pa3 ph4-l" >Fish</p>
    <p onClick={routes.contact} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Contact</p>
  </nav>
  </header>
  </div>
  <div className='containersss'>
  <main>
    <div className='themainsss ba ma5'>
      <p className='ml2 mr3'>Fish represent a broad class of 
      aquatic animals that can live in fresh or saltwater, depending on the species. <br/>Bringing fish into
       your home can be an exciting hobby, 
      especially if you intend to breed them,<br/> and the presence of a fish tank in your home can induce feelings of peace and tranquility.
      <br/>
Whether you are bringing your fish home for the first time or maintaining your aquarium, <br/>
it is important to test your water once per week to ensure it is free from toxins that can harm your fish.</p>
     <div className='theinfoss'>
    <div className=' ml4 mb2 grow ba bw2 infos1s'  > <h4>Freshwater Fish</h4> 
    <hr/>
    <p className='ml2 mr2'>There are several freshwater fish to<br/> choose from when setting up <br/>your aquarium, but it is<br/> best to consult with a “Pexpert” <br/>to ensure your fish will get <br/>along! No matter the species, <br/>ensure your fish are suited for<br/> a freshwater environment by<br/> investing in a water testing kit.<br/> Follow these general water chemistry <br/>guidelines to ensure your fish will <br/>adapt well to your aquarium and <br/>avoid ingesting toxins that can <br/>harm or kill your fish:</p>
     <ul>
        <li className='mr2'> pH Level: 6.8-7.6 (7.0 is considered neutral)</li>
        <li className='mr2'>Ammonia: any level above 0 is harmful to fish</li>
        <li>Nitrates: 5 to 10ppm</li>
        <li>Nitrites: less than 0.5 ppm</li>
     </ul>
    </div>
   
    <div className=' ml4 mb2 mr4 grow ba bw2 infos3s'  > <h4>Saltwater Fish</h4> 
    <hr/>
    <p className=' ml2 mr2'>Saltwater fish also offer several options<br/> when it comes to choosing among <br/>species for your aquarium. As <br/>with freshwater fish, consult with a<br/> “Pexpert” to ensure your fish will <br/>get along are suited for a saltwater environment.<br/> Following these general guidelines<br/> to avoid dangerous water conditions<br/> and ensure the appropriate salinity<br/> level for your fishies:</p>
   <ul>
    <li>Salinity: 1.020-1.028</li>
    <li>pH Level: 7.6-8.4 (7.0 is considered neutral)</li>
    <li className='mr2'>Ammonia: any level above 0.1 ppm requires attention</li>
    <li >Nitrates: 10 to 40 ppm</li>
   </ul>
   
    </div>
     </div>
    
      
      </div>
  </main>
  <aside className='sidesss bw2 ml ba mt5'>
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
  <footer className='footsss'> <p>Evidence-based pet care advice for every pet lover</p>
  <p>Paradigm Pet Professionals has 12 years’ experience working with pet owners,
     certifications <br/>in pet health and nutrition, and customer recognition for outstanding support </p>
 <p>Services: virtual consultations and presentations, one-on-one consultations concerning <br/>
  individual pets,
   group presentations regarding general pet care (can be tailored to the needs of the group)</p>
  </footer>

  </div>
);
}

export default Fish;