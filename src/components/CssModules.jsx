// node-sass は非推奨らしいが
import classes from "./CssModules.module.scss"

export const CssModules = () => {
    return (
        <div className={classes.container}>
            <p className={classes.title}> css modules </p>
            <button className={classes.button}>fire</button>
        </div>
    );
};