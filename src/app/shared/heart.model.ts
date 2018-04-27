export class Heart {
    constructor(
        public full: boolean,
        public urlFullHeart: string = '/assets/coracao_cheio.png',
        public urlEmptyHear: string = '/assets/coracao_vazio.png'
    ){}

    public showHeart(): string {
        if(this.full){
            return this.urlFullHeart
        } else {
            return this.urlEmptyHear
        }
    }
}