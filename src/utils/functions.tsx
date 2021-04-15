export function transformDate(date: string){
    // 2017-06-02T01:26:58Z
    const hour = date.split('T')[1].split('Z')[0];
    const day = date.split('T')[0].split('-')[2];
    const month = date.split('T')[0].split('-')[1];
    const year = date.split('T')[0].split('-')[0];
    return `${day}/${month}/${year} ${hour}`;
}