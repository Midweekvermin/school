import './Home.css';
import Pup from './puppy.png';
import para from './paradigm.png';
import 'tachyons';
import cat from './cat.png';
import dog from './dog.png';
import fish from './fish.png';

const Contact = ({routes}) => {
return (
   
  <div className='bigstuff'>
    <div className='navs'>
        <header>
        <img src={Pup}  height='100px' className='mr5' width='auto' alt='Paradigm logo'/>
        <img src={para} alt='paradigm' height='90px' width='500px'/>
       <br/>
  <nav class="bt bb tc mw7 center mt4">
    <p onClick={routes.homes} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Home</p>
    <p onClick={routes.cats} class="f6 f5-l link pointer bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Cats</p>
    <p onClick={routes.dogs} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Dogs</p>
    <p onClick={routes.fish} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Fish</p>
    <p class="f6 f5-l link bg-animate pointer black-80 bg-lightest-blue dib pa3 ph4-l" >Contact</p>
  </nav>
  </header>
  </div>
  <div className='container'>
  <main>
    <div className='themain ba ma5 pa3'>
    <form className='form' >
        <h1>Fill out this form for a consultation with a 'Pexpert'</h1>
            <label >Name: <br/> <input placeholder='Type in your Name' type="text" id='name' name="name" /></label>
            <br/>
            <label>Email: <br/><input type="text" placeholder='Type in your email' id='email' name="email" /></label>
            <br/>
            <label>Confirm email: <br/><input id='confirm' placeholder='Retype your email' type="text" name="reemail" /></label>
            <br/>
            <label>Time Zone:</label>
            <br/>
            <select placeholder='Timezone' ><option>central time</option></select>
            <br/>
            <label>Pet Name</label>
            <br/>
            <input placeholder='Type in pets name'></input>
            <br/>
            <label>Pet Age</label>
            <br/>
            <input placeholder='Type in pets age'></input>
            <br/>
            <label>Type</label>
            <br/>
            <input placeholder='What is your pet?'></input>
            <br/>
            <label>Addition information (optional):<br/> <textarea placeholder='Type your questions here' name="question" rows="4" cols="23"></textarea></label>
            <br/>
            <br/>
            <button type='submit'> Submit</button>
            <br/>
            <br/>

           </form>
      
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

export default Contact;