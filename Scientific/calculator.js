let temp="0",k=0,res=0,fact=1;
var array=[];
var sinf=0,cosf=0,tanf=0,flag=0,answer=0,i=0,a,n1,fans;
function show(n1)
{
    temp=n1;
    array.push(n1);
    calcform.txt1.value+=temp;
}
function operate()
{
    if(flag==0){
        var answer=document.getElementById('viewbar1').value;
        answer=answer.replace("(","");
        answer=answer.replace(")","");
        res=eval(answer);
        calcform.txt1.value=res;
        fans=res;
    }
    else if(flag==1)
    {
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("sin","");
        k=k.replace("(","");
        k=k.replace(")","");
        answer= Math.sin(k*(Math.PI/180.0));
        calcform.txt1.value=answer;
        fans=answer;
        flag=0;
        answer=0;
    }
    else if(flag==2)
    {
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("cos","");
        k=k.replace("(","");
        k=k.replace(")","");
        answer= Math.cos(k*(Math.PI/180.0));
        if(answer<=0.000000000005)
            {
                answer=0;
            }
        calcform.txt1.value=answer;
        fans=answer;
        flag=0;
        answer=0;
    }
    else if(flag==3)
    {
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("tan","");
        k=k.replace("(","");
        k=k.replace(")","");
        answer= Math.tan(k*(Math.PI/180.0));
        if(k==+90 || k==-90)
        {
            answer="Undefined";
        }
        calcform.txt1.value=answer;
        fans=answer;
        flag=0;
        answer=0;
    }
    else if(flag==4)
    {
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("sqrt","");
        k=k.replace("(","");
        k=k.replace(")","");
        answer=Math.sqrt(k);
        calcform.txt1.value=answer;
        fans=answer;
        flag=0;
        answer=0;
    }
    else if(flag==5)
    {
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("^3","");
        k=k.replace("(","");
        k=k.replace(")","");
        res=1;
        for(i=0;i<3;i++)
        {
            res=res*k;
        }
        answer=res;
        res=0;
        calcform.txt1.value=answer;
        fans=answer;
        flag=0;
        answer=0;
    }
    else if(flag==6){
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("^2","");
        k=k.replace("(","");
        k=k.replace(")","");
        res=1;
        for(i=0;i<2;i++)
        {
            res=res*k;
        }
        answer=res;
        res=0;
        calcform.txt1.value=answer;
        fans=answer;
        flag=0;
        answer=0;
    }
    else if(flag==7)
    {
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("^","");
        k=k.replace(a,"");
        k=k.replace("(","");
        k=k.replace(")","");
        answer=Math.pow(a,k);
        calcform.txt1.value=answer;
        fans=answer;
        answer=0;
    }
    else if(flag==8)
    {
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("log","");
        k=k.replace("(","");
        k=k.replace(")","");
        answer=Math.log10(k);
        calcform.txt1.value=answer;
        fans=answer;
        answer=0;
    }
    else if(flag==9)
    {
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("ln","");
        k=k.replace("(","");
        k=k.replace(")","");
        answer=Math.log(k);
        calcform.txt1.value=answer;
        fans=answer;
        answer=0;
    }
    else if(flag==10)
    {
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("!","");
        k=k.replace("(","");
        k=k.replace(")","");
        for(i=k;i>0;i--){
            fact=fact*i;
        }
        calcform.txt1.value=fact;
        fans=fact;
        fact=1;
    }
    else if(flag==11)
    {
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("asin","");
        k=k.replace("(","");
        k=k.replace(")","");
        answer= Math.asin(k);
        calcform.txt1.value=answer;
        fans=answer;
        flag=0;
        answer=0;
    }
    else if(flag==12)
    {
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("acos","");
        k=k.replace("(","");
        k=k.replace(")","");
        answer= Math.acos(k);
        calcform.txt1.value=answer;
        fans=answer;
        flag=0;
        answer=0;
    }
    else if(flag==13)
    {
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("atan","");
        k=k.replace("(","");
        k=k.replace(")","");
        answer= Math.atan(k);
        calcform.txt1.value=answer;
        fans=answer;
        flag=0;
        answer=0;
    }
    else if(flag==14)
    {
        k=0;
        answer=0;
        k=document.getElementById('viewbar1').value;
        k=k.replace("e^","");
        k=k.replace("(","");
        k=k.replace(")","");
        answer=Math.pow(2.71828,k);
        calcform.txt1.value=answer;
        fans=answer;
        answer=0;
    }
    else{
        calcform.txt1.value="MATH ERROR";
    }
}
function mysin()
{
    flag=1;
    calcform.txt1.value="sin";
}
function mycos()
{
    flag=2;
    calcform.txt1.value="cos";
}
function mytan()
{
   flag=3;
   calcform.txt1.value="tan";
}
function sqrt(){
    flag=4;
    calcform.txt1.value="sqrt";
}
function cube(){
    flag=5;
    calcform.txt1.value+="^3";
}
function square(){
    flag=6;
    calcform.txt1.value+="^2";
}
function reload(){
    document.location.reload();
}
function pow(){
    flag=7;
    a=document.getElementById('viewbar1').value;
    calcform.txt1.value+="^";
}
function mylog(){
    calcform.txt1.value="log";
    flag=8;
}
function myln(){
    calcform.txt1.value="ln";
    flag=9;
}
function fact1(){
    calcform.txt1.value+="!";
    flag=10;
}
function del(){
    answer=document.getElementById('viewbar1').value;
    answer=answer.replace(answer[answer.length-1],"");
    calcform.txt1.value=answer;
}
function fbo()
{
    calcform.txt1.value+="(";
}
function fbc()
{
    calcform.txt1.value+=")";
}
function ans1()
{
    calcform.txt1.value=fans; 
}
function sini(){
    flag=11;
    calcform.txt1.value="asin";
}
function cosi(){
    flag=12;
    calcform.txt1.value="acos";
}
function tani(){
    flag=13;
    calcform.txt1.value="atan";
}
function exp1()
{
    flag=14;
    calcform.txt1.value="e^";
}