import Base from "./Base";
import TechnologiesUsed from "./TechnologiesUsed";

const Recruiters = () => {
    return (
        <Base>
            <div className="flex flex-col justify-center text-center px-5 py-5">
                <h1 className="text-5xl md:text-3xl font-bold font-kindly tracking-wide mb-3 text-indigo-900 group-hover:text-indigo-700 transition-colors">Recruiters Section</h1>
            </div>
            <TechnologiesUsed />


        </Base>
    );


}
export default Recruiters;
