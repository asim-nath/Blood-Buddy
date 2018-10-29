var net = new brain.NeuralNetwork();

net.train([{input: { bp: 3, a: 2 , w:1 , s:4 , t:4 , we:1 , r:1 , g:1 , n:20 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 1, w: 1, s:4 , t:4 , we:1 , r:1 , g:1 , n:19 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 1, w: 1, s:4 , t:4 , we:1 , r:2 , g:1 , n:18 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 1, w: 1, s:4 , t:4 , we:1 , r:2 , g:1 , n:17 , er:2 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 2, w: 2, s:4 , t:4 , we:1 , r:2 , g:1 , n:16 , er:1 , e:2  }, output: { yes: 1 }},
{input: { bp: 3, a: 3, w: 1, s:4 , t:3 , we:1 , r:3 , g:1 , n:15 , er:2 , e:2  }, output: { yes: 1 }},
{input: { bp: 3, a: 1, w: 2, s:4 , t:3 , we:1 , r:1 , g:1 , n:14 , er:2 , e:2  }, output: { yes: 1 }},
{input: { bp: 3, a: 2, w: 1, s:4 , t:3 , we:1 , r:1 , g:1 , n:13 , er:2 , e:2  }, output: { yes: 1 }},
{input: { bp: 3, a: 3, w: 2, s:4 , t:4 , we:1 , r:1 , g:1 , n:12 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 1, w: 1, s:4 , t:3 , we:1 , r:1 , g:1 , n:11 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 3, w: 2, s:3 , t:4 , we:1 , r:1 , g:2 , n:10 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 2, w: 2, s:3 , t:2 , we:1 , r:3 , g:2 , n:9 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 1, w: 2, s:3 , t:4 , we:1 , r:3 , g:2 , n:8 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 2, w: 1, s:3 , t:3 , we:1 , r:3 , g:2 , n:7 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 3, w: 3, s:3 , t:3 , we:1 , r:3 , g:2 , n:6 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 1, w: 1, s:3 , t:4 , we:1 , r:3 , g:2 , n:7 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 1, w: 3, s:3 , t:4 , we:1 , r:1 , g:1 , n:8 , er:1 , e:2  }, output: { yes: 1 }},
{input: { bp: 3, a: 3, w: 1, s:3 , t:4 , we:1 , r:1 , g:1 , n:10 , er:2 , e:2  }, output: { yes: 1 }},
{input: { bp: 3, a: 3, w: 1, s:3 , t:4 , we:1 , r:1 , g:1 , n:11 , er:2 , e:2  }, output: { yes: 1 }},
{input: { bp: 3, a: 1, w: 2, s:3 , t:4 , we:1 , r:3 , g:1 , n:12 , er:2 , e:2  }, output: { yes: 1 }},
{input: { bp: 3, a: 2, w: 2, s:3 , t:3 , we:1 , r:1 , g:1 , n:13 , er:2 , e:2 }, output: { yes: 1 }},
{input: { bp: 3, a: 3, w: 1, s:3 , t:3 , we:1 , r:2 , g:1 , n:14 , er:2 , e:2  }, output: { yes: 1 }},
{input: { bp: 3, a: 1, w: 2, s:3 , t:2 , we:1 , r:1 , g:1 , n:2 , er:2 , e:2 }, output: { yes: 1 }},
{input: { bp: 3, a: 2, w: 1, s:3 , t:3 , we:1 , r:3 , g:2 , n:3 , er:2 , e:2 }, output: { yes: 1 }},
{input: { bp: 3, a: 3, w: 2, s:3 , t:4 , we:1 , r:1 , g:2 , n:1 , er:2 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 2, w: 2, s:3 , t:3 , we:1 , r:2 , g:2 , n:1 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 3, w: 2, s:3 , t:4 , we:1 , r:1 , g:2 , n:1 , er:2 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 2, w: 1, s:3 , t:3 , we:1 , r:3 , g:2 , n:1 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 1, w: 3, s:3 , t:4 , we:1 , r:1 , g:2 , n:3 , er:2 , e:3  }, output: { yes: 1 }},
{input: { bp: 3, a: 1, w: 4, s:3 , t:2 , we:1 , r:3 , g:2 , n:2 , er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 2, w: 1, s:3 , t:4 , we:1 , r:2 , g:2 , n:1, er:1 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 2, w: 3, s:3 , t:3 , we:1 , r:3 , g:1 , n:7 , er:2 , e:2  }, output: { yes: 1 }},
{input: { bp: 3, a: 2, w: 2, s:3 , t:4 , we:1 , r:3 , g:1 , n:6 , er:2 , e:2  }, output: { yes: 1 }},
{input: { bp: 3, a: 2, w: 1, s:3 , t:3 , we:1 , r:1 , g:1 , n:8 , er:1 , e:2  }, output: { yes: 1 }},
{input: { bp: 3, a: 3, w: 2, s:3 , t:4 , we:1 , r:1 , g:1 , n:9 , er:1 , e:2  }, output: { yes: 1 }},
{input: { bp: 3, a: 3, w: 1, s:4 , t:3 , we:1 , r:1 , g:1 , n:10 , er:2 , e:1  }, output: { yes: 1 }},
{input: { bp: 3, a: 1, w: 3, s:4 , t:4 , we:1 , r:3 , g:1 , n:11 , er:1 , e:3  }, output: { yes: 1 }},
{input: { bp: 3, a: 4, w: 4, s:1 , t:2 , we:2 , r:1 , g:1 , n:0 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 2, w: 4, s:1 , t:2 , we:2 , r:4 , g:1 , n:0 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 1, w: 3, s:1 , t:1 , we:2 , r:2 , g:2 , n:0 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 1, w: 4, s:1 , t:1 , we:2 , r:4 , g:2 , n:0 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 2, w: 4, s:1 , t:1 , we:2 , r:2 , g:2 , n:0 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 2, w: 4, s:1 , t:2 , we:2 , r:3 , g:2 , n:1 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 1, w: 3, s:1 , t:3 , we:2 , r:4 , g:2 , n:1 , er:2 , e:1  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 2, s:1 , t:2 , we:2 , r:3 , g:2 , n:1 , er:2 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 3, s:2 , t:1 , we:2 , r:4 , g:2 , n:1 , er:2 , e:1  }, output: { no: 1 }},
{input: { bp: 3, a: 2, w: 4, s:2 , t:2 , we:2 , r:4 , g:1 , n:2 , er:2 , e:1  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 1, s:1 , t:3 , we:2 , r:2 , g:1 , n:2 , er:1 , e:1  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 4, s:2 , t:1 , we:2 , r:3 , g:1 , n:0 , er:1 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 4, s:1 , t:2 , we:2 , r:4 , g:2 , n:3 , er:1 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 4, s:1 , t:2 , we:2 , r:3 , g:2 , n:4 , er:1 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 4, s:1 , t:3 , we:2 , r:2 , g:2 , n:1 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 4, s:1 , t:2 , we:2 , r:4 , g:2 , n:2 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 4, s:2 , t:1 , we:2 , r:2 , g:2 , n:1 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 2, w: 4, s:2 , t:2 , we:2 , r:1 , g:2 , n:0 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 3, s:2 , t:3 , we:2 , r:3 , g:2 , n:0 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 2, s:2 , t:2 , we:2 , r:1 , g:2 , n:0 , er:1 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 1, s:1 , t:1 , we:2 , r:2 , g:2 , n:0 , er:2 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 1, w: 1, s:2 , t:1 , we:2 , r:3 , g:1 , n:0 , er:2 , e:1  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 2, s:2 , t:1 , we:2 , r:4 , g:1 , n:1 , er:2 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 2, s:1 , t:2 , we:2 , r:1 , g:1 , n:1 , er:2 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 3, s:2 , t:2 , we:2 , r:2 , g:1 , n:2 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 4, s:2 , t:2 , we:2 , r:3 , g:1 , n:1 , er:2 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 4, s:2 , t:1 , we:2 , r:1 , g:2 , n:1 , er:1 , e:1  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 3, s:2 , t:3 , we:2 , r:4 , g:2 , n:1 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 3, s:1 , t:2 , we:2 , r:2 , g:2 , n:1 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 2, s:2 , t:1 , we:2 , r:1 , g:2 , n:1 , er:2 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 1, s:1 , t:1 , we:2 , r:4 , g:2 , n:2 , er:2 , e:1  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 3, s:2 , t:1 , we:2 , r:3 , g:2 , n:2 , er:2 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 3, s:1 , t:1 , we:2 , r:4 , g:2 , n:2 , er:2 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 4, s:2 , t:1 , we:2 , r:4 , g:1 , n:2 , er:1 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 4, s:2 , t:1 , we:2 , r:4 , g:1 , n:1 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 3, s:2 , t:1 , we:2 , r:4 , g:1 , n:2 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 4, s:2 , t:2 , we:2 , r:4 , g:1 , n:1 , er:1 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 3, s:1 , t:1 , we:2 , r:2 , g:2 , n:2 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 4, s:2 , t:2 , we:2 , r:2 , g:2 , n:1 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 4, s:2 , t:2 , we:2 , r:4 , g:2 , n:2 , er:1 , e:1  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 3, s:3 , t:1 , we:2 , r:4 , g:2 , n:1 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 4, s:3 , t:1 , we:2 , r:4 , g:2 , n:1 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 3, s:1 , t:2 , we:2 , r:1 , g:2 , n:2 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 3, s:3 , t:2 , we:2 , r:2 , g:2 , n:1 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 3, s:1 , t:2 , we:2 , r:3 , g:1 , n:3 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 4, s:2 , t:1 , we:2 , r:3 , g:1 , n:2 , er:1 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 4, s:2 , t:2 , we:2 , r:4 , g:1 , n:1 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 2, w: 4, s:1 , t:2 , we:2 , r:4 , g:1 , n:1 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 4, s:2 , t:2 , we:2 , r:4 , g:1 , n:1 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 4, s:1 , t:1 , we:2 , r:4 , g:1 , n:2 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 2, w: 3, s:1 , t:3 , we:2 , r:4 , g:1 , n:1 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 2, s:3 , t:2 , we:2 , r:4 , g:2 , n:1 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 1, s:2 , t:1 , we:2 , r:4 , g:2 , n:0 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 3, s:1 , t:2 , we:2 , r:4 , g:2 , n:1 , er:2 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 1, w: 4, s:2 , t:3 , we:2 , r:4 , g:2 , n:0 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 4, s:2 , t:1 , we:2 , r:4 , g:2 , n:1 , er:1 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 3, s:2 , t:2 , we:2 , r:4 , g:2 , n:2 , er:1 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 4, s:2 , t:1 , we:2 , r:4 , g:2 , n:1 , er:1 , e:2  }, output: { no: 1 }},
{input: { bp: 3, a: 4, w: 3, s:2 , t:2 , we:2 , r:4 , g:2 , n:0 , er:2 , e:3  }, output: { no: 1 }},
{input: { bp: 3, a: 3, w: 4, s:2 , t:1 , we:2 , r:2 , g:2 , n:2 , er:2 , e:2  }, output: { no: 1 }},
]);


