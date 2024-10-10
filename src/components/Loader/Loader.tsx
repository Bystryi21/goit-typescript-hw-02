import { Grid } from "react-loader-spinner";
import css from "./Loader.module.css";
import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <Grid
        visible={true}
        height="40"
        width="40"
        color="#4169e1"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};

export default Loader;
