import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ShortDiagnostic from './components/ShortDiagnostic';
import ShortResult from './components/ShortResult';
import FullDiagnostic from './components/FullDiagnostic';
import FullResult from './components/FullResult';
import Guide from './components/Guide';
import Practice from './components/Practice';
import { Screen, AxisResult, Axis } from './types';

function App() {
    const [screen, setScreen] = useState<Screen>(Screen.WELCOME);
    const [shortResult, setShortResult] = useState<AxisResult | null>(null);
    const [fullScores, setFullScores] = useState<Record<Axis, number> | null>(null);

    const handleShortComplete = (result: AxisResult) => {
        setShortResult(result);
        setScreen(Screen.SHORT_RESULT);
    };

    const handleFullComplete = (scores: Record<Axis, number>) => {
        setFullScores(scores);
        setScreen(Screen.FULL_RESULT);
    };

    const renderScreen = () => {
        switch (screen) {
            case Screen.WELCOME:
                return (
                    <WelcomeScreen 
                        onStartShort={() => setScreen(Screen.SHORT_QUIZ)}
                        onStartFull={() => setScreen(Screen.FULL_QUIZ)}
                        onGuide={() => setScreen(Screen.GUIDE)}
                        onPractice={() => setScreen(Screen.PRACTICE)}
                    />
                );
            case Screen.SHORT_QUIZ:
                return <ShortDiagnostic onComplete={handleShortComplete} />;
            case Screen.SHORT_RESULT:
                return shortResult ? (
                    <ShortResult 
                        result={shortResult} 
                        onFullMap={() => setScreen(Screen.FULL_QUIZ)} 
                    />
                ) : null;
            case Screen.FULL_QUIZ:
                return <FullDiagnostic onComplete={handleFullComplete} />;
            case Screen.FULL_RESULT:
                return fullScores ? (
                    <FullResult 
                        scores={fullScores} 
                        onRestart={() => setScreen(Screen.WELCOME)} 
                    />
                ) : null;
            case Screen.GUIDE:
                return <Guide onBack={() => setScreen(Screen.WELCOME)} />;
            case Screen.PRACTICE:
                return <Practice onBack={() => setScreen(Screen.WELCOME)} />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-bg min-h-screen text-gold-100 font-sans selection:bg-gold-200 selection:text-bg bg-radial-gradient">
            <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center items-center relative z-10">
                {renderScreen()}
            </div>
            
            {/* Background Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
        </div>
    );
}

export default App;