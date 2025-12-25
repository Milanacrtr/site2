export type Axis = 'logic' | 'empathy' | 'adaptability' | 'meaning';

export interface Option {
    text: string;
    axis?: Axis; // For short quiz
    score?: Partial<Record<Axis, number>>; // For full quiz
}

export interface Question {
    number?: number;
    category?: string;
    text: string;
    options: Option[];
}

export interface AxisResult {
    title: string;
    description: string;
    insight: string;
    class: Axis;
}

export interface FullMapPoint {
    number: number;
    title: string;
    content: string;
}

export interface SevenPointMap {
    position: string;
    glitch: string;
    axis: string;
    rhythm: string;
    exit: string;
    step: string;
    direction: string;
}

export enum Screen {
    WELCOME = 'WELCOME',
    SHORT_QUIZ = 'SHORT_QUIZ',
    SHORT_RESULT = 'SHORT_RESULT',
    FULL_QUIZ = 'FULL_QUIZ',
    FULL_RESULT = 'FULL_RESULT',
    GUIDE = 'GUIDE',
    PRACTICE = 'PRACTICE'
}