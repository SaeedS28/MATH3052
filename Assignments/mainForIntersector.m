%% User Prompts
messageSegment = 'Please enter the cartesian coordinates of the line segment in the form: ';
formatSegment = '[X1 Y1 X2 Y2] \nDO NOT FORGET TO START AND END WITH THE SQUARE BRACKETS!\n ';

messageCircle = '\nPlease enter the coordinates of the center of a circle and its radius in the form: ';
formatCircle = '[H K R] \nDO NOT FORGET TO START AND END WITH THE SQUARE BRACKETS!\n>>  ';

lineSegment = input(strcat(messageSegment,formatSegment));

circleInfo = input(strcat(messageCircle,formatCircle));
%%disp(cToBCoor);

%% Error Checking
if size(lineSegment,2) ~= 4
    error("You didn't enter the 4 required parameters for the line segment.  Try Again");
end

if size(circleInfo,2) ~= 3
    error("You didn't enter the required parameters for the circle.  Try Again");
end

%% Method call
%%[C1, C2, C3] = cartesianToBarycentric(triangleCoor, cicleInfo);

%%fprintf("\nBased on the triangle coordinates provided, point (%.5f,%.5f) has Barycentric coordinates (%.5f,%.5f,%.5f)\n\n",cicleInfo(1),cicleInfo(2), C1, C2, C3)

%% Render a circle
% code from: https://www.mathworks.com/matlabcentral/answers/98665-how-do-i-plot-a-circle-with-a-given-radius-and-center

th = 0:pi/50:2*pi;
xunit = circleInfo(3) * cos(th) + circleInfo(1);
yunit = circleInfo(3) * sin(th) + circleInfo(2);

line([lineSegment(1) lineSegment(3)], [lineSegment(2) lineSegment(4)]);
hold on
plot(xunit, yunit);

%% Render a line segment

%function call
t=Intersector(lineSegment,circleInfo);

%checks the number of possible solutions
answerVector=[];
z=0;
if isreal(t(1)) && (t(1)>=0 && t(1)<=1)
    z=z+1;
    answerVector(z)=t(z);
end

if isreal(t(2)) && (t(2)>=0 && t(2)<=1)
    z=z+1;
    answerVector(z)=t(z);
end

fprintf("\nThe values of t's are: (%.5f,%.5f). This means that the line intersects the circle at %i places.\n\n",t(1),t(2),z)

%Compute the answers from t to get the points of intersection
xInt=[];
yInt=[];

for i=1:size(answerVector,2)
    xInt(i)=(answerVector(i).*lineSegment(1))+((1-answerVector(i)).*lineSegment(3));
    yInt(i)=(answerVector(i).*lineSegment(2))+((1-answerVector(i)).*lineSegment(4));
end