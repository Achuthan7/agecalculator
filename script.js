function calculateAge()
{
    var today=new Date();
    var bdate=new Date(document.getElementById('bday').value);
    const bd=bdate.getDate();
    const bm=bdate.getMonth()+1;
    const by=bdate.getFullYear()+1;
    const cd=today.getDate();
    const cm=today.getMonth();
    const cy=today.getFullYear();
    var age=cy-by;
     if(by>cy)
    {
        alert("Enter a valid DOB");
        var flag=1;
    }
    if((bm<cm && flag!=1) || (bm==cm && bd<cd && flag!=1))
    {
        document.getElementById('res').innerText=`Age:${age+1}`;
    }
   if((bm>cm && flag!=1) || (bm==cm && bd>cd && flag!=1))
   {
    document.getElementById('res').innerText=`Age:${age}`;
    
   }

}
document.getElementById('clicker').addEventListener('click',calculateAge);
