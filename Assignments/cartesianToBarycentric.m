function [C1, C2, C3] = cartesianToBarycentric(triangle,cToBCoor)
% converts a point in cartesian to barycentric with reference toa triangle

%% Setting up the coefficient matrix

A=[triangle(1),triangle(3),triangle(5);
    triangle(2),triangle(4), triangle(6);
    1 1 1];

%disp(A);
b=[cToBCoor(1);cToBCoor(2);1];

%% Setting up for Cramer's rule
A1=[b A(:,2) A(:,3)];
A2=[A(:,1) b A(:,3)];
A3=[A(:,1) A(:,2) b];
%disp(A3);

%% Actual computation
detOfA=det(A);
detOfA1=det(A1);
detOfA2=det(A2);
detOfA3=det(A3);

% Computing coefficients

C1=detOfA1/detOfA;
C2=detOfA2/detOfA;
C3=detOfA3/detOfA;

end