import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

public class JarvisImplementation {

	    public static ArrayList<Point> computeJarvis(ArrayList<Point> points) { 
	         
	        if (points.size() < 3) {
	        	throw new IllegalArgumentException("Need more than 3 points");
	        }
	       
	         
	        ArrayList<Point> hull = new ArrayList<Point>(); 
	       
	        // Find the leftmost point 
	        int leftTemp = 0; 
	        for (int i = 1; i < points.size(); i++) 
	            if (points.get(i).getX() < points.get(leftTemp).getX()) {
	            	leftTemp = i;
	            }

	        int placeHolder = leftTemp;
	        int right; 
	        
	        do {
	            hull.add(points.get(placeHolder)); 
	       
	            right = (placeHolder + 1) % points.size(); 
	              
	            for (int i = 0; i < points.size(); i++) { 
	               if (product(points.get(placeHolder), points.get(i), points.get(right))== 2) 
	                   right = i; 
	            } 
	       
	            placeHolder= right; 
	       
	        } while(placeHolder != leftTemp);  

	        return hull;
	        
	    }
	    
	 // works couterclock-wise so the product is negative if the point is on the right of all the pointsa 
		 public static int product(Point a, Point b, Point c) { 
		        int val = (b.getY() - a.getY()) * (c.getX() - b.getX()) -(b.getX() - a.getX()) * (c.getY() - b.getY()); 
		       
		        if (val == 0) {
		        	return 0;  // collinear point 
		        }
		        if(val>0) {
		        	return 1;
		        }
		        return 2; 
		    }
		 
		 public static ArrayList<Double> computeDistance(ArrayList<Point> points) {
			 if (points.size() < 2) {
		        	throw new IllegalArgumentException("Need more than 2 points");
		     }
			     
			 ArrayList<Double> distances= new ArrayList<Double>();
			 
			 for(int i=1;i<points.size();i++) {
				 double dist=Math.sqrt(Math.pow(points.get(i).getX()-points.get(i-1).getX(), 2)+Math.pow(points.get(i).getY()-points.get(i-1).getY(), 2));
				 distances.add(dist);
			 }
			 double backDist=Math.sqrt(Math.pow(points.get(0).getX()-points.get(points.size()-1).getX(), 2)+
					 Math.pow(points.get(0).getY()-points.get(points.size()-1).getY(), 2));
			 
			 distances.add(backDist);
			 return distances;
		 }
}
