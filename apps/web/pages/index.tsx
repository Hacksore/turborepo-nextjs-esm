// TODO: this should load from packages/shared/utils/user
import { getNiceNumber } from "shared/utils/user";

export default function Web() {
  return (
    <div>
      <h1>Web {getNiceNumber()}</h1>
    </div>
  );
}
