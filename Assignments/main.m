%% User Prompts
messageTriangle = 'Please enter the cartesian coordinates of the vertices of the triangle in the form: ';
formatTriangle = '[X1 Y1 X2 Y2 X3 Y3] \nDO NOT FORGET TO START AND END WITH THE SQUARE BRACKETS!\n ';

messagePoint = '\nPlease enter the cartesian coordinates of the point to convert it to barycentric in the form: ';
formatPoint = '[X4 Y4] \nDO NOT FORGET TO START AND END WITH THE SQUARE BRACKETS!\n>>  ';

triangleCoor = input(strcat(messageTriangle,formatTriangle));
%%disp(triangleCoor);

cToBCoor = input(strcat(messagePoint,formatPoint));
%%disp(cToBCoor);

%% Error Checking
if size(triangleCoor,2) ~= 6
    error("You didn't enter the 6 required parameters for the triangle vertices.  Try Again");
end

if size(cToBCoor,2) ~= 2
    error("You didn't enter the arbitrary point.  Try Again");
end

%% Method call
[C1, C2, C3] = cartesianToBarycentric(triangleCoor, cToBCoor);

fprintf("\nBased on the triangle coordinates provided, point (%.5f,%.5f) has Barycentric coordinates (%.5f,%.5f,%.5f)\n\n",cToBCoor(1),cToBCoor(2), C1, C2, C3)

%% Checks and see if the point is within the triangle
if C1<0 | C2<0 | C3<0
    fprintf('Coordinate is outside the triangle\n');
else
    fprintf('Coordinate is inside the triangle\n');
end

%% Plot the result
line([triangleCoor(1) triangleCoor(3)], [triangleCoor(2) triangleCoor(4)]);
line([triangleCoor(1) triangleCoor(5)], [triangleCoor(2) triangleCoor(6)]);
line([triangleCoor(3) triangleCoor(5)], [triangleCoor(4) triangleCoor(6)]);
hold on
plot(cToBCoor(1), cToBCoor(2),'*');