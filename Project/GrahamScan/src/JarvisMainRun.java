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
		points.add(new Point(2,6));

		JarvisImplementation jo = new JarvisImplementation();
		ArrayList<Point> convex = jo.computeJarvis(points);
		
		// Print Result 
        for (Point temp : convex) {
            System.out.println("(" + temp.getX() + ", " +temp.getY() + ")");
        }
	}

}
