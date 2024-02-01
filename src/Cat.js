import './Cat.css';
import Pup from './puppy.png';
import para from './paradigm.png';
import 'tachyons';


const Cat = ({routes}) => {
return (
   
  <div className='bigstuffs'>
    <div className='navers'>
        <header>
        <img src={Pup}  height='100px' className='mr5' width='auto' alt='Paradigm logo'/>
        <img src={para} alt='paradigm' height='90px' width='500px'/>
       <br/>
  <nav class="bt bb tc mw7 center mt4">
    <p onClick={routes.homes} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Home</p>
    <p onClick={routes.cats} class="f6 f5-l link pointer bg-animate black-80 bg-lightest-blue dib pa3 ph4-l" >Cats</p>
    <p onClick={routes.dogs} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Dogs</p>
    <p onClick={routes.fish} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Fish</p>
  
    <p onClick={routes.contact} class="f6 f5-l link bg-animate pointer black-80 hover-bg-lightest-blue dib pa3 ph4-l" >Contact</p>
  </nav>
  </header>
  </div>
  <div className='containers'>
  <main>
    <div className='themains ba ma5'>
      <p className='ml2 mr3'>Cats were first domesticated around 7500 BCE in the western Asia region and are currently 
        the second most popular <br/> domestic pet in the United States. 
        While there are over 60 unique documented cat breeds, 
        care and diet can differ <br/> between breeds. However, some diets and practices 
        are generally recommended for the well-being of your fluffy <br/>family member regardless of breed.</p>
     <div className='theinfo'>
    <div className=' ml4 mb2 grow ba bw2 info1'  > <h4>Zero to Four Weeks</h4> 
    <hr/>
    <p className='ml2 mr2'>It is important the queen <br/>(a term commonly used <br/>for a female cat that<br/> is either pregnant or nursing)<br/>
       directly nurse her young<br/> if possible. Monitor your <br/>kitten’s growth closely to<br/> make sure
        its growth rate is<br/> progressing steadily. If any<br/>  kitten is not growing at a<br/> sufficient rate, 
        a caretaker <br/>might need to feed the kitten <br/>directly either with a bottle<br/> or a feeding tube.
       Some reasons<br/> why kittens might not gain weight<br/> appropriately include the following:</p>
       <ul>
        <li>Too many other siblings<br/> are competing for mom's milk</li>
        <li>gastrointestinal disease</li>
        <li>environmental conditions such as<br/> extreme heat or cold, or<br/> unsanitary conditions</li>
       </ul>
    </div>
    <div className=' ml4 mb2 grow ba bw2 info2'  > <h4>Four Weeks to One Year</h4> 
    <hr/>
    <p className='ml2 mr2'>Kittens can start being introduced<br/> to soft wet kitten food typically<br/> around three to four weeks<br/> after birth. According to<br/> the ASPCA, kittens at this<br/> age should eat half to<br/> one cup of dry kitten<br/> food or six to nine ounces<br/> of wet kitten food per day. <br/> If your kitten has<br/> difficulties eating hard food,<br/> a small amount of water<br/> can be added to soften<br/> the food. Cat food that<br/> is optimized for kittens<br/> provides the additional nutrients<br/> that are needed for <br/>growth, energy, and wellness.<br/> Depending on the breed,<br/> your cat may have different<br/> dietary requirements. You should <br/>always consult with your <br/>veterinarian for recommendations.</p>
    </div>
    <div className=' ml4 mb2 mr4 grow ba bw2 info3'  > <h4>One Year to Seven Years</h4> 
    <hr/>
    <p className='ml2 mr2'>This age is when kittens<br/> reach the cat stage and <br/>do not need as many nutrients.<br/> At this age, their level<br/> of activity decreases, and so <br/>does their metabolism. <br/>It is not recommended<br/> to leave food out <br/>for the cats all day. <br/>Instead, provide food a couple<br/> times a day so they<br/> eat meals rather than <br/>snacking throughout the day.<br/> This practice reduces the<br/> risk of obesity and other<br/> weight-related feline ailments.</p>
    </div>
     </div>
     <div className='underinfo mb2 grow ba bw2'> <h4>Seven Years and More</h4>
     <hr/>
     <p>Much like many living organisms, 
      the body begins to deteriorate
       and experience a lot of changes.<br/>
        Cats at this age should eat 
        less fats and calories and
         more quality proteins. This<br/>
          means when you are purchasing 
          packaged foods for your cat,
          look for food that states a particular <br/>protein (such as "salmon") and not just a category (such as fish). 
      This usually means they are byproducts, or combinations, <br/>of lesser quality proteins.</p></div>
      </div>
  </main>
  <aside className='sides bw2 ml ba mt5'>
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
  <footer className='foots'> <p>Evidence-based pet care advice for every pet lover</p>
  <p>Paradigm Pet Professionals has 12 years’ experience working with pet owners,
     certifications <br/>in pet health and nutrition, and customer recognition for outstanding support </p>
 <p>Services: virtual consultations and presentations, one-on-one consultations concerning <br/>
  individual pets,
   group presentations regarding general pet care (can be tailored to the needs of the group)</p>
  </footer>

  </div>
);
}

export default Cat;