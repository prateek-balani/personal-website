
import Base from "./Base";
import Typewriter from 'typewriter-effect';
import WinHelp from "./windowsEffect";
import SelectionSection from "./SelctionSection";
const HomePage = () => {
    return (
        <Base>
            <div className="flex flex-col justify-center text-center min-h-screen px-4 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 overflow-hidden">
                <WinHelp title="C:\\Users\\Prateek\\welcome.txt" width={"48vw"} >
                    <WinHelp title="C:\\Users\\Prateek\\welcome.txt" width={"57vw"} >
                        <WinHelp title="C:\\Users\\Prateek\\Welcome.txt" width={"32vw"} >
                            <WinHelp title="C:\\Users\\Prateek\\Website.txt" width={"72vw"} >
                                <WinHelp title="C:\\Users\\Prateek\\Welcome.txt" width={"90vw"} >
                                    <div className="font-bold font-kindly text-[#0c148c] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">


                                        <Typewriter
                                            options={{
                                                strings: [
                                                    'WELCOME',
                                                    'TAKE A LOOK AROUND',
                                                    'THIS IS A PERSONAL SITE',
                                                    'NOT A TEMPLATE',
                                                    'DESIGNED, NOT POLISHED'
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                delay: 55,
                                                deleteSpeed: 35,
                                                pauseFor: 1200,
                                                cursor: '_',
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