
import Base from "./Base";
import Typewriter from 'typewriter-effect';
import WinHelp from "./windowsEffect";
import SelectionSection from "./SelctionSection";
const HomePage = () => {
    return (
        <Base>
            <div className="flex flex-col justify-center text-center min-h-screen px-4 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 overflow-hidden">
                <WinHelp title="C:\\Users\\Prateek\\welcome.txt" width={"48vw"} >
                    <WinHelp title="C:\\Users\\Prateek\\welcome to.txt" width={"57vw"} >
                        <WinHelp title="C:\\Users\\Prateek\\Welcome to my.txt" width={"32vw"} >
                            <WinHelp title="C:\\Users\\Prateek\\Website.txt" width={"72vw"} >
                                <WinHelp title="C:\\Users\\Prateek\\Welcome to my Website.txt" width={"90vw"} >
                                    <div className="font-bold font-kindly text-[#0c148c] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">


                                        <Typewriter
                                            options={{
                                                strings: ['WELCOME', 'WELCOME TO MY WEBSITE'],
                                                autoStart: true,
                                                loop: true,
                                            }}


                                        />
                                    </div>
                                </WinHelp>
                            </WinHelp>
                        </WinHelp>
                    </WinHelp>
                </WinHelp>
            </div>
            <SelectionSection />

        </Base>

    );

}
export default HomePage;