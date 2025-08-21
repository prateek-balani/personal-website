
import Base from "./Base";
import Typewriter from 'typewriter-effect';
import WinHelp from "./windowsEffect";
const HomePage = () => {
    return (
        <Base>
            <div className="flex flex-col justify-center text-center min-h-screen p-10">
                <WinHelp title="C:\\Users\\Prateek\\welcome.txt" width={"48vw"} >
                    <WinHelp title="C:\\Users\\Prateek\\right.txt" width={"57vw"} >
                        <WinHelp title="C:\\Users\\Prateek\\right.txt" width={"32vw"} >
                            <WinHelp title="C:\\Users\\Prateek\\right.txt" width={"72vw"} >
                                <WinHelp title="C:\\Users\\Prateek\\right.txt" width={"90vw"} >
                                    <div className="text-7xl md:text-8xl lg:text-9xl font-bold font-kindly text-[#0c148c]">


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
        </Base>

    );

}
export default HomePage;