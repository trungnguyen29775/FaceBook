const day = []
for(let i=1;i<=31;i++)
    day.push(i)
const month  = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const year=[]
for(let i=2023;i>=1905;i--)
    year.push(i)
const Date={
    day:day,
    month:month,
    year:year
}
export default Date