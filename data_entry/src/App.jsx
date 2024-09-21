import React, { useState } from 'react';
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
      
      <div >
          <div className='data-entry-container'>
          <form action="">
              <div className="data-heading">
                  <p className='data-title'>STUDENT DATA ENTRY FORM</p>
                  <p className='warning-text'>"<span className='star'>*</span>" indicates required fields</p>
              </div>
              <button className='export-btn'>Excel Export</button>
              <div className="data-entry-box">
                  <div className="date">
                      <p className='entry-title'>Date <span className='star'>*</span></p>
                      <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                      <p className='tale-title'>Date of the record</p>
                  </div>
                  <div className='wake-up-time single-entry-field'>
                      <p className='entry-title'>Wake_up_at</p>
                      <input type="number" />
                      <input type="number" />
                      <p className='tale-title'>Exact time when wakeup</p>
                  </div>
                  {/* <div className="wake-up-point">
                      <p className='entry-title'>Waking_up <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>How he wakes up in the morning, is it normal or not. Is there any aggressiveness or not? Here 0 is the worst and 10 is the best</p>

                  </div>
              </div>
              <div className='data-entry-box'>
                  <div className="go_out single-entry-field">
                      <p className='entry-title'>1st_go_out <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>After waking up from bed how he start his first hour. If he takes more time to go out, that is the good sign of his good condition</p>
                  </div>
                  <div className="screen_on single-entry-field">
                      <p className='entry-title'>1st_screen_on <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>when he 1st time start the TV or mobile. If he takes more time to use those that is he is feeling good</p>
                  </div>
                  <div className="screen_on single-entry-field">
                      <p className='entry-title'>Breakfast <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Dose he take the breakfast normally or not. Dose he has the normal appetite? 0 is the no appetite and 10 is the good and normal appetite</p>
                  </div>
              </div>
              <div className='data-entry-box'>
                  <div className='radio-entry'>
                      <p className='entry-title'>Schooling <span className='star'>*</span></p>
                      <input type="radio" name="Yes" value="Yes" />
                      <label for="Yes">Yes</label> <br />
                      <input type="radio" name="No" value="No" />
                      <label for="No">No</label> <br />

                  </div>
                  <div className="Class_activity single-entry-field">
                      <p className='entry-title'>Class_activity <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Overall class activity, does he follow all the instruction from his teacher or not. Here 0 means it is an off day, 1 is the worst and 10 is the best</p>
                  </div>
                  <div className="Outdoor_activity single-entry-field">
                      <p className='entry-title'>Outdoor_activity <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Outdoor activity, does he follow all the instructions from his teacher. Here 0 means it is an off day, 1 is the worst and 10 is the best</p>
                  </div>
              </div>
              <div className='data-entry-box'>
                  <div className='radio-entry'>
                      <p className='entry-title'>Therapy_at_school <span className='star'>*</span></p>
                      <input type="radio" name="Therapy_at_school" value="Yes" />
                      <label for="Yes">Yes</label> <br />
                      <input type="radio" name="Therapy_at_school" value="No" />
                      <label for="No">No</label> <br />

                  </div>
                  <div className='Therapy_type'>
                      <p className='entry-title'>Therapy_type <span className='star'>*</span></p>
                      <input type="radio" name="Therapy_type" value="OT" />
                      <label for="OT">OT</label> <br />
                      <input type="radio" name="Therapy_type" value="PT" />
                      <label for="PT">PT</label> <br />
                      <input type="radio" name="Therapy_type" value="SLT" />
                      <label for="SLT">SLT</label> <br />
                      <p className='tale-title'>What kind of therapy he/she gets today. Mark as much as he/she gets it.</p>
                  </div>
                  <div className="Launch single-entry-field">
                      <p className='entry-title'>Launch <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Does he take the launch properly? Appetite and asking for favorite food. 0 is the worst and 10 is the best</p>
                  </div>
              </div>
              <div className='data-entry-box'>
                  <div className="Evening_snakes single-entry-field">
                      <p className='entry-title'>Evening_snakes <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Does he take the snakes properly, appetite and asking for food. ) is the worst and 10 is the best</p>
                  </div>
                  <div className="Dinner single-entry-field">
                      <p className='entry-title'>Dinner <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Does he take the dinner properly, appetite and asking for favorite food? 0 is the worst and 10 is the best</p>
                  </div>
                  <div className="Going_to_sleep single-entry-field">
                      <p className='entry-title'>Going_to_sleep <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Does he felt sleep on time or not? Does he get exited before sleeping or not? 0 is the worst and 10 is the best</p>
                  </div>
              </div>
              <div className='data-entry-box'>
                  <div className='time-input time-entry-field'>
                      <p className='entry-title'>Go_to_Bed_at</p>
                      <input type="number" />
                      <input type="number" />
                      <p className='tale-title'>Exact time of going to bed</p>
                  </div>
                  <div className='time-input time-entry-field'>
                      <p className='entry-title'>Sleep_at</p>
                      <input type="number" />
                      <input type="number" />
                      <p className='tale-title'>Exact time of sleeping</p>
                  </div>
                  <div className="Getting_sleep_time single-entry-field">
                      <p className='entry-title'>Getting_sleep_time <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>How much time he took to sleep after going to bed. 0 is the best timing that is he gone sleep just after going to bed and higher number is he took more time to sleep, which is not good</p>
                  </div>
              </div>
              <div className='data-entry-box'>
                  <div className="Outgoing_tendency single-entry-field">
                      <p className='entry-title'>Outgoing_tendency <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>How he wants to go outside? Dose it very aggressive or not. Does he listen when asking to wait? Here 0 is the best and 10 is the worst</p>
                  </div>
                  <div className="Outgoing_count single-entry-field">
                      <p className='entry-title'>Outgoing_count <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Total number of outgoing, 0 is the best and higher number is bad as high as it is</p>
                  </div>
                  <div className="Screen_time  single-entry-field">
                      <p className='entry-title'>Screen_time <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Total number of hours he used the phone. Less number is good and higher number is bad</p>
                  </div>
              </div>
              <div className='data-entry-box'>
                  <div className="Junk_Food single-entry-field">
                      <p className='entry-title'>Junk_Food <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>How frequently he wants to take junk food like chips, biscuits etc. less number is good and higher number is worst</p>
                  </div>
                  <div className="Making_noise single-entry-field">
                      <p className='entry-title'>Making_noise <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>How frequently and how long he makes noises. Less in good and higher is bad</p>
                  </div>
                  <div className="Walking  single-entry-field">
                      <p className='entry-title'>Walking <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>How frequently or how long he walks around the rooms. Less time is good and higher is bad</p>
                  </div>
              </div>
              <div className='data-entry-box'>
                  <div className="Showing_anger single-entry-field">
                      <p className='entry-title'>Showing_anger <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Tendency and number of showing anger through the day. Less number is good and higher is bad</p>
                  </div>
                  <div className="Glass_crash_tendency single-entry-field">
                      <p className='entry-title'>Glass_crash_tendency <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Does he show any tendency to crash any glassware? Usually glassware are kept away from him. But at the worst time he tries to find it out and want to crash it. Less number is good and higher is bad</p>
                  </div>
                  <div className="Pushing_tendency  single-entry-field">
                      <p className='entry-title'>Pushing_tendency <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>How he shows his pushing tendency, does he push any kids or family member? Less is good and higher is bad</p>
                  </div>
              </div>
              <div className='data-entry-box'>
                  <div className="item_throw_tendency single-entry-field">
                      <p className='entry-title'>item_throw_tendency <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Does he through any item away, or through the window. Less is good and higher is bad</p>
                  </div>
                  <div className="Food_water_throw_tendency single-entry-field">
                      <p className='entry-title'>Food_water_throw_tendency <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Does he through his favorite food away? Less is good and higher is bad</p>
                  </div>
                  <div className="Hit_with_hand  single-entry-field">
                      <p className='entry-title'>Hit_with_hand <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Does he show anger and hit with his hand? Less is good and higher is bad</p>
                  </div>
              </div>
              <div className='data-entry-box'>
                  <div className="Hit_with_head single-entry-field">
                      <p className='entry-title'>Hit_with_head <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Does he show anger and hit with his head or hit his head on wall? Less is good and higher is bad</p>
                  </div>
                  <div className="Cooperate_at_school single-entry-field">
                      <p className='entry-title'>Cooperate_at_school <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>How he cooperates with his daily life works at school. Less is bad and higher is good. 0 means off day</p>
                  </div>
                  <div className="Cooperate_at_home  single-entry-field">
                      <p className='entry-title'>Cooperate_at_home <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>How he cooperates with his daily life works at home. Less is bad and higher is good</p>
                  </div>
              </div>
              <div className='data-entry-box'>
                  <div className="Cutting_nails single-entry-field">
                      <p className='entry-title'>Cutting_nails <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Does he cooperate to cutting nails or not? Less is bad and higher is good. Usually it occur once in a week. 0 means not occur</p>
                  </div>
                  <div className="Hair_dressing single-entry-field">
                      <p className='entry-title'>Hair_dressing <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Does he cooperate to dressing his hair? Less is bad and higher is good. Usually is occur once in a month. 0 means not occur</p>
                  </div>
                  <div className="Bedwetting  single-entry-field">
                      <p className='entry-title'>Bedwetting <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>Is there any bedwetting count today? When and how many times. Less is good and higher is bad</p>
                  </div>
              </div>
              <div className='data-entry-box'>
                  <div className='radio-entry'>
                      <p className='entry-title'>Regular_Medication</p>
                      <input type="radio" name="Therapy_at_school" value="Yes" />
                      <label for="Yes">Yes</label> <br />
                      <input type="radio" name="Therapy_at_school" value="No" />
                      <label for="No">No</label> <br />
                      <p className='tale-title'>Does he take the regular medication on time? Is there any changes on it? Yes or not. Changes are recorded separately. Yes is good and No is not good. Need the details</p>

                  </div>
                  <div className='radio-entry'>
                      <p className='entry-title'>Other_Sickness </p>
                      <input type="radio" name="Therapy_at_school" value="Yes" />
                      <label for="Yes">Yes</label> <br />
                      <input type="radio" name="Therapy_at_school" value="No" />
                      <label for="No">No</label> <br />
                      <p className='tale-title'>Is there any other sickness like fiver, cold etc. less is good and higher is bad</p>

                  </div>
                  <div className="Name of Sickness single-entry-field">
                      <p className='entry-title'>Name of Sickness </p>
                      <input type="text" />
                      <p className='tale-title'>Name or description of the sickness</p>

                  </div> */}

              </div>
              <div className='data-entry-box'>
                  <div className='radio-entry Med_other_sickness'>
                      <p className='entry-title'>Med_other_sickness</p>
                      <input type="radio" name="Therapy_at_school" value="Yes" />
                      <label for="Yes">Yes</label> <br />
                      <input type="radio" name="Therapy_at_school" value="No" />
                      <label for="No">No</label> <br />
                      <p className='tale-title'>Does he need any medication for other sickness?</p>

                  </div>
                  <div className="List_of_medicine single-entry-field">
                      <p className='entry-title'>Name of Sickness </p>
                      <textarea name="" id="" cols="25" rows="10"></textarea>
                      <p className='tale-title'>List of all medicine required for the other sickness</p>

                  </div>
                  <div className="Masturbation  single-entry-field">
                      <p className='entry-title'>Masturbation <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>How many times he tries to masturbate and when? Less is good and higher is bad</p>
                  </div>

              </div>
              <div className='data-entry-box'>
                  <div className="Toilet  single-entry-field">
                      <p className='entry-title'>Toilet <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number from 0 to 10.</p>
                      <p className='tale-title'>How many times he goes to toilet? 1-2 times are normal, more is not. Even none is also not good</p>
                  </div>
                  <div className="Overnight_sleeping single-entry-field">
                      <p className='entry-title'>Overnight_sleeping <span className='star'>*</span></p>
                      <input type="number" placeholder='0-10' />
                      <p className='tale-title'>Please enter a number greater than or equal to 0.</p>
                      <p className='tale-title'>Does he sleep properly? Higher number is good and lower is bad</p>
                  </div>
                  <div className="Special_activity single-entry-field">
                      <p className='entry-title'>Special_activity </p>
                      <textarea name="" id="" cols="30" rows="5"></textarea>
                      <p className='tale-title'>Any special, new or unusual thing he/she did today. Describe the activity, what, when and how he/she did it.</p>

                  </div>

              </div>
              <div>
                  <div className="img-container">
                      <div>
                          <p className='img-title'>Prescription_reports</p>
                          <input type="file" onChange={handleChange} />
                          <img src={file} />
                          <p className='img-tail'>Accepted file types: jpg, jpeg, png, gif.</p>
                          <p className='tale-title'>Upload the most recent or new prescription and report if needed</p>
                      </div>

                  </div>
              </div>
              <div className='data-btn-container'>

                <input type="submit" className='data-btn' name="submit" id="submit" />
                  <button className='save-btn'>SAVE AND CONTINUE LATER</button>
              </div>
          </form>
          </div>
         
          <Contact></Contact>
          <Footer></Footer>
      </div>
      
  );
};

export default App
