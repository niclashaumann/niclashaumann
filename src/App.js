import "./App.css";
import { isMobile } from "react-device-detect";
import cn from "classnames";

function App() {
  return (
    <div className={cn("app", { "app-mobile": isMobile })}>
      <header>
        <img src="/logos/logo.png" alt="logo" class="logo" />
      </header>
      <div>
        <h1 className={cn("app-header", { "app-mobile-header": isMobile })}>
          <span>Niclas</span>
          <br />
          <span>Haumann</span>
        </h1>
        <h4>
          <span>Born digital</span>
        </h4>
      </div>
      <div>
        <h2>About</h2>
        <p>
          born sometime in 1995. raised in the heart of copenhagen. and
          currently working at noa ignite as a producer where we solve complex
          problems and help companies stand out through meaningful and
          distinctive digital experiences.
        </p>
        <br />
        <p>
          i am passionate about everything i do and firmly believe that success
          does not come without failure. i enjoy a challenge - and have been
          fortunate to experience a lot of those as part of leading a team
          creating and maintaining many digital experiences in my somewhat short
          career.
        </p>
        <br />
        <p>
          a few clients i have worked with are løgismose, dansk metal, maersk,
          hamburg süd, lunar app, postnord, welltec and north risk.
        </p>
        <br />
        <p>
          on the personal side you should know that my dream car is a nero
          ferrari enzo and my favourite tv-show is larry david.
        </p>

        <h3>Experience</h3>
        <div className="experience">
          <p>producer, noa ignite</p>
          <p className="dates">
            2022 - <span className="valid">present</span>
          </p>
        </div>
        <div className="experience">
          <p>junior producer, noa ignite</p>
          <p className="dates">2021 - 2022</p>
        </div>
        <h3>Get in touch</h3>
        <p>
          send me a mail at hi@niclashaumann.com or call/text me at +45
          40590995.
          <br />
          <br />
          or find me on linkedin, instagram or apple music.
        </p>
      </div>
    </div>
  );
}
export default App;
