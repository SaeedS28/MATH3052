import java.util.ArrayList;

public class JarvisMainRun {

	public static void main(String[] args) {
		ArrayList<Point> points = new ArrayList<Point>();
		
		points.add(new Point(0,3));
		points.add(new Point(2,3));
		points.add(new Point(1,1));
		points.add(new Point(2,1));
		points.add(new Point(3,0));
		points.add(new Point(0,0));
		points.add(new Point(3,3));

		ArrayList<Point> convex = JarvisImplementation.computeJarvis(points);
		
		// Print Result 
        for (Point temp : convex) {
            System.out.println("(" + temp.getX() + ", " +temp.getY() + ")");
        }
	}

}
