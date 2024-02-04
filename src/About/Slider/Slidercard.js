import React from 'react'
import './Slidercard.css'
import s3 from '../Carasusel.js/images/s3.jpg';
import s2 from '../Carasusel.js/images/s2.jpg';
import s4 from '../Carasusel.js/images/s4.jpg';
import s1 from '../Carasusel.js/images/s1.png';
import s5 from '../Carasusel.js/images/s5.png';
import s6 from '../Carasusel.js/images/s6.jpeg';
import { NavLink } from 'react-router-dom';
function Slidercard() {
  return (

    <>
  
      <div class="articles">
        <article>
          <figure>
            <img src={s1} alt="Lavender Fields" />
          </figure>
          <div class="article-preview">
            <h2>Liver Disease</h2>
            <p>
              Liver failure occurs when a large portion of the liver is damaged due to any type of liver disorder.
              Symptoms may include: Learn about common symptoms of liver
              disease including jaundice, ymptoms of liver,cholestasis, liver enlargement, portal hypertension, esophageal varices, ascites, and more
            </p>
            <NavLink to='/contact' activeClassName='active-link'>
            <button>Enquiry Now<svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg></button>
            </NavLink>
          </div>
        </article>
        <article>
          <figure>
            <img src={s2} alt="Snowy Mountains" />
          </figure>
          <div class="article-preview">
            <h2>Fibroids Symptoms</h2>
            <p>
              You may have constipation and vaginal bleeding along with pain after this procedure and you can face this
              condition for up to 6 weeks. some women become
              emotional as they no longer can become mother and others may feel happy bleeding along with or relieved by the removal of fibroids.
            </p>
            <NavLink to='/contact' activeClassName='active-link'>
            <button> Enquiry Now <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg></button>
            </NavLink>
          </div>
        </article>
        <article>
          <figure>
            <img src={s3} alt="Wooden Bridge" />
          </figure>
          <div class="article-preview">
            <h2> Dengue infections </h2>
            <p>
              Most dengue infections don’t cause symptoms. If you do have symptoms, high fever (104°F/40°C) is typical, along with: Rash.
              Intense pain behind your eyes. Nausea or vomiting. Muscle, bone and joint pain. Dengue fever symptoms start to appear four to 10 days after a
              mosquito bite
            </p>
            <NavLink to='/contact' activeClassName='active-link'>
            <button> Enquiry Now <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg></button>
            </NavLink>
          </div>
        </article>
        <article>
          <figure>
            <img src={s4} alt="Autumn Forest" />
          </figure>
          <div class="article-preview">
            <h2> Skin infections</h2>
            <p>
              Skin infections occur when germs infect your skin or the soft tissues below the skin's surface.
              There are four main types of germs that can infect your skin: bacteria, viruses, fungi, and parasites.
              skin infections are the third most common medical
            </p>
            <NavLink to='/contact' activeClassName='active-link'>
            <button> Enquiry Now <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg></button>
            </NavLink>

          </div>
        </article>
        <article>
          <figure>
            <img src={s5} alt="Freezing Forest" />
          </figure>
          <div class="article-preview">
            <h2> Body Pain</h2>
            <p>
              Body aches can result from tiredness or exercise and commonly occur with infections such as the flu. But,
              they can also be a symptom of an underlying condition, such as fibromylagia, arthritis, or lupus.
              While body aches are usually harmless,
            </p>
            <NavLink to='/contact' activeClassName='active-link'>
            <button> Enquiry Now <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg></button>
            </NavLink>
          </div>
        </article>
        <article>
          <figure>
            <img src={s6} alt="Freezing Forest" />
          </figure>
          <div class="article-preview">
            <h2> Migraine</h2>
            <p>
              Migraine is different in everyone. In many people, it happens in stages. These stagesmay include
              Prodrome Hours or days before a headache, about 60% of people who have migraine notice symptoms like:
               Being sensitive to light, sound, or smell,Fatigue...
            </p>
            <NavLink to='/contact' activeClassName='active-link'>
            <button> Enquiry Now <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg></button>
            </NavLink>

          </div>
        </article>
      </div>

    </>
  )
}

export default Slidercard
