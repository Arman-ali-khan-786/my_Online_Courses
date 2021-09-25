/* package codechef; // don't place package name! */

import java.util.*;
import java.util.Arrays;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		// your code goes here
		
		try{
			//Your Solve
			Scanner sc = new Scanner(System.in);
			int r = sc.nextInt();
			int a[] = new int[r];
			int b[]  =new int[r];
			Integer lead[] = new Integer[r];
			int leader[] = new int[r];
			for(int i = 0 ; i<r ; i++){
			    a[i]=sc.nextInt();
			    b[i]=sc.nextInt();
			    if(a[i]>b[i]){
			        leader[i] = 1;
			        if((a[i]-b[i])<0){
			            lead[i] = (-1)*(a[i]-b[i]);
			        }
			        else{
			            lead[i] = a[i]-b[i];
			        }
			    }
			    else{
			        leader[i] = 2;
			        if((b[i]-a[i])<0){
			            lead[i] = (-1)*(b[i]-a[i]);
			        }
			        else{
			            lead[i] = b[i]-a[i];
			        }
			    }
			}
			int max = lead[0];
			for (int i = 1; i < lead.length; i++){
                if (lead[i] > max){
                  max = lead[i];
                }
			}
			    int index = Arrays.asList(lead).indexOf(max);
			    System.out.println(leader[index]+" "+max);
			    
		}catch(Exception e){
			return;
		}
	}
}
