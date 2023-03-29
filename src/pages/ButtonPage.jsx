import Button from "../components/Button";
import {
  GoBell,
  GoAlert,
  GoCircleSlash,
  GoCheck,
  GoInfo,
  GoThumbsup,
} from "react-icons/go";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button rounded>
          <GoInfo />
          Plain
        </Button>
      </div>
      <div>
        <Button primary outline>
          <GoThumbsup />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoBell />
          Secondary
        </Button>
      </div>
      <div>
        <Button success>
          <GoCheck />
          Success
        </Button>
      </div>
      <div>
        <Button warning>
          <GoAlert />
          Warning
        </Button>
      </div>
      <div>
        <Button danger>
          <GoCircleSlash />
          Danger
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
