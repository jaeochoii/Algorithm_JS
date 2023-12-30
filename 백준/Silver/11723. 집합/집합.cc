	#include <iostream>
#include <cstring>
 
using namespace std;
 
 
//비트마스크로 풀기
 
int main(){
    
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    
    string str = "";
    int M, x;
    
    int S = 0;
   
    cin >> M;
    for(int i = 0; i<M; i++){
        cin >> str;
        
        if(str=="add"){
            cin >> x;
            S |= (1<<x);
        }
        
        else if(str=="remove"){
            cin >> x;
            S &= ~(1<<x);
        }
        else if(str=="check"){
            cin >> x;
            if(S & (1<<x)){   
                cout << "1\n";
            } else{
                cout << "0\n";
            }
        }
        else if(str=="toggle"){
           cin >> x;
            if(S & (1<<x)){  
                S &= ~(1<<x); 
            } else{            
                S |= (1<<x);
            }
        }
        else if(str=="all"){
            S = (1<<21) - 1;
        }
        else if(str=="empty"){
            S = 0;
        }
        
    
    }
    
    return 0;
}