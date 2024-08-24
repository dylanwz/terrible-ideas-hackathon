export type Translation = {
    output: Language;
}

export type Language = {
    random_int_transformed: number;
    australian_answer: string;
    chinese_answer: string;
    dumb_answer: string;
    girl_answer: string;
    indo_answer: string;
    pirate_answer: string;
    sergeant_answer: string;
    smart_answer: string;
    victorian_answer: string;
    wizard_answer: string;
}

export const LanguageMap: Record<number, keyof Language> = {
    1: "victorian_answer",
    2: "australian_answer",
    3: "chinese_answer",
    4: "indo_answer",
    5: "girl_answer",
    6: "sergeant_answer",
    7: "pirate_answer",
    8: "wizard_answer",
    9: "dumb_answer",
    10: "smart_answer",
  }