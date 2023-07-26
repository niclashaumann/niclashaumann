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
          <span>'block a second</span>
        </h4>
      </div>
      <div className="container">
        <h2>About</h2>
        <p>
          born sometime in 1995. raised in the heart of copenhagen. and
          currently working at{" "}
          <a
            href="https://www.noaignite.dk"
            target="_blank"
            rel="noopener noreferrer"
          >
            noa ignite
          </a>{" "}
          as a producer where we solve complex problems and help clients stand
          out through meaningful and distinctive digital experiences.
        </p>
        <br />
        <p>
          as a producer i work as a hybrid between product owner and project
          manager. in short, i work in detail together with some of the greatest
          creative and technical people in the business to solve the problem
          while ensuring we do so within time and budget.
        </p>
        <br />
        <p>
          a few of the clients i have worked with so far are{" "}
          <a
            href="https://www.loegismose.dk"
            target="_blank"
            rel="noopener noreferrer"
          >
            løgismose
          </a>
          ,{" "}
          <a
            href="https://www.danskmetal.dk"
            target="_blank"
            rel="noopener noreferrer"
          >
            dansk metal
          </a>
          ,{" "}
          <a
            href="https://www.hamburgsud.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hamburg süd
          </a>
          ,{" "}
          <a
            href="https://www.meyers.dk"
            target="_blank"
            rel="noopener noreferrer"
          >
            meyers
          </a>
          ,{" "}
          <a
            href="https://www.lunar.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            lunar
          </a>
          ,{" "}
          <a
            href="https://www.postnord.dk"
            target="_blank"
            rel="noopener noreferrer"
          >
            postnord
          </a>
          ,{" "}
          <a
            href="https://www.welltec.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            welltec
          </a>{" "}
          and{" "}
          <a
            href="https://northrisk.dk"
            target="_blank"
            rel="noopener noreferrer"
          >
            north risk
          </a>
          .
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
        <div>
          <h3>Get in touch</h3>
          <p>
            send me a mail at{" "}
            <a href={`mailto:niclashaumann@icloud.com`}>
              niclashaumann@icloud.com
            </a>{" "}
            or call/text me at <a href={`tel:+4540590995`}>+45 40590995</a>.
            <br />
            <br />
            ...or find me on{" "}
            <a
              href="https://www.linkedin.com/in/niclashaumann/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            ,{" "}
            <a
              href="https://www.instagram.com/niclashaumann/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>{" "}
            and{" "}
            <a
              href="https://music.apple.com/profile/niclashaumann"
              target="_blank"
              rel="noopener noreferrer"
            >
              apple music
            </a>
            .
          </p>
        </div>
      </div>
      <div className="outro">
        <span>© niclashaumann, 2023</span>
      </div>
    </div>
  );
}
export default App;
