function c_snakes(xCord, yCord, color, blockCount, inputKeyCode)
{
    this.xCord = xCord;
    this.yCord = yCord;
    this.speed = 1;
    this.controlSnake = false;
    this.size = 10;
    this.color = color;
    this.blockcount = blockCount;
    this.blockArray = [this.blockCount];
    this.inputKeyCode = inputKeyCode;
    this.dirFlag = [0,0,0,0];
    this.grow = false;
    this.shrink = false;
    this.speedUp = false;
    this.speedDown = false;
    this.maxLength = 30;
    this.originalLength = 8;
    this.score = 0;
    this.initSnake = m_initSnake;
    this.drawSnake = m_drawSnakeSquares;
    this.moveSnake = m_moveSnakeSquares;
    this.growSnake = m_growSnake;
    this.shrinkSnake = m_shrinkSnake;
    this.incSpeed= m_incSpeed;
    this.decSpeed = m_decSpeed;
    this.wallCollision =  m_wallCollision;
    this.selfCollision = m_selfCollision;
    
    this.resetSnakeSize = m_resetBlockCount;
    this.resetSnakespeed = m_resetSnakespeed;
}
            
function m_initSnake()
{
    for(var i = 0; i < this.maxLength ; i++)
    {
        this.blockArray[i] =
            new c_blocks(this.xCord + (i * this.size), this.yCord, this.size, this.color, this.speed, i==0);
        for(var j = 0 ; j < this.blockArray[i].size ; j++)
        {
            this.blockArray[i].xPosMap[j] = this.blockArray[i].xPos + j; 
            this.blockArray[i].yPosMap[j] = this.blockArray[i].yPos; 
        }
    }
}

//moving 
function m_moveSnakeSquares()
{
    /*if(this.controlSnake)
    {   
        for(var x = 0 ; x < this.speed; x++)
        {
            for (var index=0; index < 4; ++index)
            {
                if(this.dirFlag[index]==1)
                {
                    this.blockArray[0].RectDirFlag[0] = 0;
                    this.blockArray[0].RectDirFlag[1] = 0;
                    this.blockArray[0].RectDirFlag[2] = 0;
                    this.blockArray[0].RectDirFlag[3] = 0;
                    this.blockArray[0].RectDirFlag[index] = 1;
                    this.controlSnake = true;
                    
                    if (this.dirFlag[index]==1)
                    {
                        if (index%2 == 0)
                        {
                            this.blockArray[0].xPos += (index - 1);
                        }
                        else
                        {
                            this.blockArray[0].yPos += (index - 2);
                        }
                    }

                    for(var j = this.blockArray[0].xPosMap.length-1; j > 0 ; j --)
                    {
                        this.blockArray[0].xPosMap[j] = this.blockArray[0].xPosMap[j-1];
                        this.blockArray[0].yPosMap[j] = this.blockArray[0].yPosMap[j-1];
                    }
                    this.blockArray[0].xPosMap[0] = this.blockArray[0].xPos;
                    this.blockArray[0].yPosMap[0] = this.blockArray[0].yPos;
                }
            }
            
            for(var i = this.maxLength-1 ; i > 0 ; i --)
            {
                this.blockArray[i].xPos = this.blockArray[i-1].xPosMap[this.blockArray[i-1].xPosMap.length-1];
                this.blockArray[i].yPos = this.blockArray[i-1].yPosMap[this.blockArray[i-1].yPosMap.length-1];
                
                for(var j = this.blockArray[i].xPosMap.length-1; j > 0 ; --j)
                {
                    this.blockArray[i].xPosMap[j] = this.blockArray[i].xPosMap[j-1];
                    this.blockArray[i].yPosMap[j] = this.blockArray[i].yPosMap[j-1];
                }
                this.blockArray[i].xPosMap[0] = this.blockArray[i].xPos;
                this.blockArray[i].yPosMap[0] = this.blockArray[i].yPos;
            }
        }
    }*/
    
    if(this.controlSnake)
                    {
                        for( var x = 0 ; x < this.blockArray[0].rectSpeed ; x++)
                            {
                                    for(var i = this.maxLength-1 ; i > 0 ; i --)
                                       {
                                           this.blockArray[i].xPos = this.blockArray[i-1].xPosMap[(this.blockArray[i-1].xPosMap.length)-1];
                                           this.blockArray[i].yPos = this.blockArray[i-1].yPosMap[this.blockArray[i-1].yPosMap.length-1]; 

                                           for(var j = this.blockArray[i].xPosMap.length-1 ; j > 0 ; j --)
                                               {
                                                   this.blockArray[i].xPosMap[j] = this.blockArray[i].xPosMap[j-1];
                                                   this.blockArray[i].yPosMap[j] = this.blockArray[i].yPosMap[j-1];
                                               }
                                                   this.blockArray[i].xPosMap[0] = this.blockArray[i].xPos;
                                                    this.blockArray[i].yPosMap[0] = this.blockArray[i].yPos;  

                                       }
                                

                                        //left
                                        if(this.dirFlag[0]==1)
                                           {

                                              this.blockArray[0].RectDirFlag[0] = 1

                                               this.blockArray[0].xPos -= snakeOneSpeed;
                                              this.blockArray[0].RectDirFlag[1] = 0;
                                              this.blockArray[0].RectDirFlag[2] = 0;
                                              this.blockArray[0].RectDirFlag[3] = 0;
                                               this.controlSnake = true;
                                           }
                                        //up
                                       if(this.dirFlag[1]==1)
                                           {

                                               this.blockArray[0].RectDirFlag[1] = 1

                                               this.blockArray[0].yPos -= snakeOneSpeed;
                                               this.blockArray[0].RectDirFlag[0] = 0;
                                               this.blockArray[0].RectDirFlag[2] = 0;
                                               this.blockArray[0].RectDirFlag[3] = 0;
                                               this.controlSnake = true;
                                           }

                                        //right
                                        if(this.dirFlag[2] == 1)
                                           {

                                               this.blockArray[0].RectDirFlag[2] = 1

                                               this.blockArray[0].xPos += snakeOneSpeed;
                                               this.blockArray[0].RectDirFlag[0] = 0;
                                               this.blockArray[0].RectDirFlag[1] = 0;
                                               this.blockArray[0].RectDirFlag[3] = 0;
                                               this.controlSnake = true;
                                           }
                                        //down
                                        if(this.dirFlag[3] == 1)
                                           {

                                               this.blockArray[0].RectDirFlag[3] = 1

                                              this.blockArray[0].yPos += snakeOneSpeed;
                                               this.blockArray[0].RectDirFlag[1] = 0;
                                               this.blockArray[0].RectDirFlag[2] = 0;
                                               this.blockArray[0].RectDirFlag[0] = 0;
                                               this.controlSnake = true;
                                           }


                                           if(this.controlSnake)
                                            {
                                            //for head
                                                for(var j = this.blockArray[0].xPosMap.length-1; j > 0 ; j --)
                                                   {
                                                       this.blockArray[0].xPosMap[j] = this.blockArray[0].xPosMap[j-1];
                                                       this.blockArray[0].yPosMap[j] = this.blockArray[0].yPosMap[j-1];
                                                   }
                                                       this.blockArray[0].xPosMap[0] = this.blockArray[0].xPos;
                                                        this.blockArray[0].yPosMap[0] = this.blockArray[0].yPos;
                                            }
                                /*if(collisionDetection(this.blockArray[0], powerUpObj))
                                    {
                                        console.log("collided");
                                    }*/
                            }
                    }
}

function m_growSnake()
{
    if(this.blockcount < this.maxLength)
    {
        if(this.grow)
            {
                this.blockcount += 1;
            }
        
    }
    this.grow = false;
}
            
function m_shrinkSnake()
{
    if(this.blockcount > this.originalLength)
    {
        if(this.shrink)
            {
               this.blockcount -= 1; 
            }
        
    }
    this.shrink = false;
}
            
function m_incSpeed()
{
    if( this.blockArray[0].rectSpeed <= 10)
    {
        if(this.speedUp)
            {
                this.blockArray[0].rectSpeed += 1;
            }
        
    }
    else
    {
        this.blockArray[0].rectSpeed = 10;
    }
    this.speedUp = false;
}
            
function m_decSpeed()
{
    if(this.blockArray[0].rectSpeed > 1)
    {
        if(this.speedDown)
            {
                 this.blockArray[0].rectSpeed-= 1;
            } 
    }
    else
    {
        this.blockArray[0].rectSpeed = 1;
    }  
    this.speedDown = false;
}
function m_resetBlockCount()
{
    this.blockcount = this.originalLength;
}

function m_resetSnakespeed()
{
    this.speed = 1;
}

function m_wallCollision()
{
    if(this.blockArray[0].xPos < 0)
    {
        this.initSnake();
    }
    if(this.blockArray[0].xPos + this.size > canvas.width)
    {
        this.initSnake();
    }
    if(this.blockArray[0].yPos < 0)
    {
        this.initSnake();
    }
    if(this.blockArray[0].yPos + this.size > canvas.height)
    {
       this.initSnake();
    }
}

function m_selfCollision()
{
    for(var i = 2 ; i > this.blockcount-1; i++)
    {
        if(collisionDetection(this.blockArray[0], this.blockArray[i]))
        {
            this.blockArray[0].RectDirFlag[0] = 1;
            this.initSnake();
            this.resetSnakeSize();
            this.resetSnakespeed();
        }   
    }
}


           
function m_drawSnakeSquares(ctx)
{
   for(var i = 0; i < this.blockcount; ++i)
   {
       this.blockArray[i].drawRects(ctx);
   }   
}