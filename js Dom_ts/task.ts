class Task{
       constructor(public category: string, public title: string,
                    public priority: number,  public estimate: number,
                    public spent?: number,  public remaining?: number){
                        this.spent = this.spent || 0;
                        this.remaining = this.remaining || 1.5;
       } 
       track (spent_nmber: number){
           if(spent_nmber > 0){
                this.spent = spent_nmber;
                this.remaining -= spent_nmber;
           }
       } 
       done(): boolean{
            return this.remaining == 0;
       }  
       complete(){
           this.remaining = 0;
       }

}