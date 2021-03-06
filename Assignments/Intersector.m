function t=Intersector(segment,circle)
%INTERSECTOR Determines whether a line segment intersects a circle
%   Method finds the values of t using the quadratic formula
px1=segment(1);
px2=segment(3);
py1=segment(2);
py2=segment(4);

cH=circle(1);
cK=circle(2);
cRad=circle(3);

% circle has the form (x-h)^2+(y-k)^2=R^2
% line segment has been parameterized to x=tx1+(1-t)x2
% and y=ty1+(1-t)y2
% by plugging in the parameterized form of the line segment
% into the equation of the circle,we can obtain a 
% quadratic equation that can be solved for t

A=(px1.^2)-(2.*px1.*px2)+(px2.^2)+(py1.^2)-(2.*py1.*py2)+(py2.^2);
B=(2.*px1.*px2)-(2.*px2.^2)+(2.*py1.*py2)-(2.*py2.^2)-(2.*cH.*px1)+(2.*cH.*px2)-(2.*cK.*py1)+(2.*cK.*py2);
C=(cH.^2)+(px2.^2)+(py2.^2)-(cRad.^2)+(cK.^2)-(2.*cK.*py2);

% Finding the roots of this quadratic equation
t=zeros(2,1);
disc=sqrt(B.^2-4.*A.*C);
t(1)=(-B+disc)./(2.*A);
t(2)=(-B-disc)./(2.*A);

end