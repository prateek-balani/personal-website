
import Base from "./Base";
import Typewriter from 'typewriter-effect';
const HomePage = () => {
    return (
        <Base>
            <div className="flex flex-col items-center justify-center text-center min-h-screen">
                <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-white">


                    <Typewriter
                        options={{
                            strings: ['WELCOME', 'WELCOME TO MY WEBSITE'],
                            autoStart: true,
                            loop: true,
                        }}
                        wrapperClassName="text-7xl md:text-8xl lg:text-9xl font-bold text-white"

                    />
                </div>

            </div>
        </Base>

    );

}
export default HomePage;