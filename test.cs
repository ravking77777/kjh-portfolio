void processScore(){
    getScore((MathScore, EngScore, PhyScore, ArtScore, MusicScore);

    calculateSumAverage(s_ID, MathScore, EngScore, PhyScore, ArtScore, MusicScore);
    print(s_ID, total, average);
}

void calculateSumAverage(double s_ID, int MathScore, int EngScore, int PhyScore, int ArtScore, int MusicScore) {

    total = calculateSum(MathScore, EngScore, PhyScore, ArtScore, MusicScore);
    average = total / count(score)
}