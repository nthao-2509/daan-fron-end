
export const AcademicAbility = (letterGrades: string) => {
    switch (letterGrades) {
        case 'A':
            return 'Giỏi';
        case 'B':
            return 'Khá';
        case 'C':
            return 'Trung Bình';
        case 'D':
            return 'Yếu';
        case 'F':
            return 'Kém';
        default:
            return;
    }
}